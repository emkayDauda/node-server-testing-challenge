// const request = require("supertest");
const db = require('../database/dbConfig')
const userModel = require('./userModel')

beforeEach( async () => {
    await db('users').truncate()
})

describe('Users model', () => {
    describe('Get function', () => {
        test('Should return array', async () => {
            const res = await userModel.get()
            expect(Array.isArray(res)).toBe(true)
        })

        test(`should return array of length zero`, async () => {
            expect(await userModel.get()).toHaveLength(0)
           
        })
    })

    describe(`insert function`, () => {
        test(`Should return array of length 1`, async () => {
            await userModel.insert({username: 'aName', password: 'aLongPassword'})
            
            expect(await userModel.get()).toHaveLength(1)
        })

        test(`Should return correct details`, async () => {
            const user =  await userModel.insert({username: 'aName', password: 'aLongPassword'})
            
            expect(user.username).toBe('aName')
            expect(user.password).toBe('aLongPassword')
        })
    })
})
