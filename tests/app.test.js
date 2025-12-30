const request = require('supertest');
const app = require('../app');

describe('Express App Tests', () => {
  test('GET / should return HTTP 200 and welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to Simple CI/CD Demo!');
    expect(response.body.version).toBe('1.0.0');
  });

  test('GET /health should return HTTP 200 and health status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
    expect(response.body.timestamp).toBeDefined();
    expect(typeof response.body.timestamp).toBe('string');
  });

  test('GET /api/hello should return HTTP 200 and greeting', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body.greeting).toBe('Hello from CI/CD Pipeline!');
    expect(response.body.success).toBe(true);
  });
});
