// pages/api/wp-health.js
export default async function handler(_req, res) {
  try {
    const r = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ query: '{ posts(first:1){ nodes { id } } }' }),
    });
    const json = await r.json();
    res.status(200).json({ ok: true, json });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
}
