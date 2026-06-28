function status(request, response) {
  response
    .status(200)
    //.send("Response ok! Porém acentuação fica zoada"); --NAO PADRONIZA UTF-8
    .json({ status: "OK" });
}

export default status;
