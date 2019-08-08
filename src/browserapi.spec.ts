import request from "supertest";

const app = "https://d.browserapi.eatos.co";

describe("test: browserapigtw", () => {
  describe("test: users-service", () => {
    test("Register should fail", async () => {
      const { body } = await request(app).post("/user/register");
      expect(body.success).toBe(0);
    });
    test("Register should pass", async () => {
      const { body } = await request(app)
        .post("/user/register")
        .send({
          username: "user@email.com",
          firstName: "Alan",
          lastName: "Faraj",
          otpType: 1,
          mobile: "+89237892178",
          merchantName: "ftf",
          password: "Test@123"
        });
      expect(body.success).toBe(1);
    });
  });
  describe("voy a testes payments", () => {
    // tests aqui
  });
});
