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
