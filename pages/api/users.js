import fetch from "isomorphic-unfetch";

export default async function handle(req, res) {
  const { id } = req.query;
  const url = `https://jsonplaceholder.typicode.com/fuhton/chicken/users/${id || ""}`;
  const result = await fetch(url).then(data => data.json());
  res.json(result);
}
