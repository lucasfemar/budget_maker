test("GET api/status should return 200", async () => {
  const response = await fetch("http://localhost:8080/api/v1/status");
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  expect(responseBody.dependencies.database.version).toBe("16.2");
  expect(responseBody.dependencies.database.max_connections).toBe(100);
  expect(responseBody.dependencies.database.opened_connections).toBe(1);
});
