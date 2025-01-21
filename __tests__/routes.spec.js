require('dotenv').config();

const request = require('supertest');
const app = require('../app');

describe('Routes', () => {
    describe('/comments', () => {
        test('GET /', async () => {
            const res = await request(app).get('/comments');
            const isArray =  Array.isArray(res.body);
            expect(res.statusCode).toBe(200);
            expect(isArray).toBe(true);
        });

        test('POST /', async () => {
            const res = await request(app).post('/comments');
            expect(res.statusCode).toBe(201);
            expect(typeof res.body === 'object').toBe(true);
        });

        test('GET /:id', async () => {
            const res = await request(app).get('/comments/1');
            expect(res.statusCode).toBe(200);
            expect(typeof res.body.comment === 'object').toBe(true);
        });

        test('PUT /:id', async () => {
            const res = await request(app).put('/comments/1');
            expect(res.statusCode).toBe(200);
            expect(typeof res.body === 'object').toBe(true);
        });

        test('DELETE /:id', async () => {
            const res = await request(app).delete('/comments/1');
            expect(res.statusCode).toBe(204);
            expect(typeof res.body === 'object').toBe(true);
        });
    })

    
    describe('/resume', () => {
        test('GET /linkedIn', async () => {
            const res = await request(app).get('/resume/linkedIn');
            expect(res.text).toBe('Get linkedin');
        });
    })
})