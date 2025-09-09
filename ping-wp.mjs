import { request } from 'undici';
const url = process.env.WORDPRESS_GRAPHQL_ENDPOINT || 'https://wordpress.welcometoyellow.com/admin-graphql';
try {
  const r = await request(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query: '{ __typename }' })
  });
  console.log('WP status:', r.statusCode);
  process.exit(0);
} catch (e) {
  console.error('Ping from Vercel failed:', e?.cause?.code || e.message);
  process.exit(1);
}
