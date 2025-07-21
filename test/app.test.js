const request = require("supertest");
const { app, server, name } = require("../app");

describe("GET /", () => {
  afterAll(() => {
    server.close();
  });

  it("should respond with a greeting message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      `Hello, World! Welcome to my world maame! ${name}.`
    );
  });
});
