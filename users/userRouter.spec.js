const request = require("supertest");
const users = require("./userRouter");

describe('/api/users/* endpoints', () => {
    describe('[GET] /api/users', () => {
        test(`/api/users returns correct response code`, () => {
            return request(users).get('/')
            .expect(200)
        })
    })
})