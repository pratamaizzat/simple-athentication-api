const request = require('supertest')
const app = require('../../src/app')

describe('Return Welcome Message if user access root', () => {
  test('should return welcome message with status code is 200', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        statusText: 'OK',
        message: 'Welcome To Simple Authentication System',
      })
    )
  })

  test('should return welcome message with status code is 200', async () => {
    const response = await request(app)
      .get('/api/v1')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body).toEqual(
      expect.objectContaining({
        status: 200,
        statusText: 'OK',
        message: 'Welcome To Simple Authentication System',
      })
    )
  })
})
