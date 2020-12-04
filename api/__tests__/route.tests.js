import request from "supertest";
import app from '../app'


describe('GET /:search', () => {
    it('responds with a list of songs containing the search text', async () => {
        const response = await request(app).get('/azy')
        expect(response.status).toEqual(200)
        expect(response.body).toEqual(["Crazy Little Thing Called Love", "I Go Crazy", "Stone Cold Crazy"])
    })
    it('responds with an empty list if the search text is bad', async () => {
        const response = await request(app).get('/azyn')
        expect(response.status).toEqual(200)
        expect(response.body).toEqual([])
    })
})

describe('GET /', () => {
    it('responds with a 400 error if search text is empty', async () => {
        const response = await request(app).get('/')
        expect(response.status).toEqual(400)
        expect(response.body).toEqual([])
    })
})
