test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  //console.log(response); -- AQUI RETORNA UMA PROMISE { <PENDING> }
  expect(response.status).toBe(200);
});
