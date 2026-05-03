export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.tornexchange.com/prices/SomTallWhiteGuy");
    if (!response.ok) throw new Error("Failed to fetch TornExchange");
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
