// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// import { removeLastTrailingSlash } from './util';
// let client;

// /**
//  * getApolloClient
//  */

// export function getApolloClient() {
//   if (!client) {
//     client = _createApolloClient();
//   }
//   return client;
// }

// /**
//  * createApolloClient
//  */

// export function _createApolloClient() {
//   return new ApolloClient({
//     link: new HttpLink({
//       uri: removeLastTrailingSlash(process.env.WORDPRESS_GRAPHQL_ENDPOINT),
//     }),
//     cache: new InMemoryCache({
//       typePolicies: {
//         RootQuery: {
//           queryType: true,
//         },
//         RootMutation: {
//           mutationType: true,
//         },
//       },
//     }),
//   });
// }

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { removeLastTrailingSlash } from './util';

let client;

/** --- timeout + retry helpers --- */
async function safeFetch(url, opts = {}, ms = 15000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...opts, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchWithRetry(url, opts = {}, { retries = 2, timeoutMs = 15000, backoffMs = 1000 } = {}) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await safeFetch(url, opts, timeoutMs);
      if (!res.ok) {
        // surface 4xx/5xx immediately (retry policy for 5xx is your call)
        const text = await res.text().catch(() => '');
        const err = new Error(`HTTP ${res.status} ${res.statusText}: ${text.slice(0, 200)}`);
        err.status = res.status;
        throw err;
      }
      return res;
    } catch (err) {
      const isLast = i === retries;
      const isAbort = err?.name === 'AbortError';
      const isNet = err?.code === 'ETIMEDOUT' || err?.code === 'ECONNRESET' || isAbort;
      if (!isNet && !isAbort) throw err; // non-network error → don't retry
      if (isLast) throw err;
      await new Promise(r => setTimeout(r, backoffMs * (i + 1))); // 1s, 2s, …
    }
  }
}

/** getApolloClient */
export function getApolloClient() {
  if (!client) client = _createApolloClient();
  return client;
}

/** createApolloClient */
export function _createApolloClient() {
  const uri = removeLastTrailingSlash(process.env.WORDPRESS_GRAPHQL_ENDPOINT);

  return new ApolloClient({
    ssrMode: true, // important on the server/build
    link: new HttpLink({
      uri,
      // Use our retrying, timeout-aware fetch for all Apollo requests
      fetch: (input, init) =>
        fetchWithRetry(String(input), init, {
          retries: 2,         // total attempts = retries + 1
          timeoutMs: 15000,   // 15s per attempt
          backoffMs: 1000,    // 1s, 2s between tries
        }),
    }),
    cache: new InMemoryCache({
      typePolicies: {
        RootQuery: { queryType: true },
        RootMutation: { mutationType: true },
      },
    }),
  });
}
