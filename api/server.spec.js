const request = require("supertest");
const server = require("./server.js");

describe("server", () => {
  describe("[GET] base url", () => {
    test("Base Url sends 200 response code", () => {
      return request(server)
        .get("/")
        .expect(200)
    });

    test('Base URL sends appropriate body', () => {
        return request(server)
        .get('/')
        .expect({ error: false, message: "api le up" });
    })
  });
});

describe("/api/users/* endpoints", () => {
  describe("[GET] /api/users", () => {
    test(`/api/users returns correct response code`, async () => {
      const response = await request(server)
            .get("/api/users")
        // console.log(response);
        expect(response.statusCode).toBe(200)
    });

    test(`returns correct response body`, async () => {
        const response = await request(server)
        .get("/api/users")
        expect(Array.isArray(response.body)).toBe(true)
    })
  });

  describe(`[POST] /api/users`, () => {
      test(`adds user successfully`, async () => {
          const testObject = {username: 'a', password: 'password'}

          const response = await request(server)
          .post(`/api/users`, testObject)

          expect(response.username).toBe(testObject.username)
      })
  })
});
