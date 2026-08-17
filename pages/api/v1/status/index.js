import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response
    .status(200)
    //.send("Response ok! Porém acentuação fica zoada"); --NAO PADRONIZA UTF-8
    .json({ status: "OK" });
}

export default status;
