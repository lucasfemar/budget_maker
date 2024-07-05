describe("CREATE USER ENDPOINT", () => {
  it("http://localhost:8080/user should return status 201", async () => {
    const user = {
      name: "createUserDummy",
      email: "createUserDummy@gmail.com",
      password: "123456789",
      dateOfBirth: "01/01/2000",
    };
    const response = await fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status).toBe(201);
    expect(responseBody.user).toHaveProperty("id");
    expect(responseBody.user.name).toBe(user.name);
    expect(responseBody.email).toBe(user.email);
  });

  it("http://localhost:8080/users should return status 400", async () => {
    const response = await fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    expect(response.status).toBe(400);
  });
});
