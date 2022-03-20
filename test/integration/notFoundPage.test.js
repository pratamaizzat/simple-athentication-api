const request = require('supertest')
const app = require('../../src/app')

describe('Only available route user can access', () => {
  test('should return status 404 if user access not available method', async () => {
    const response = await request(app)
      .post('/')
      .set('Accept', 'application/json')
      .send({})
      .expect('Content-Type', /json/)
      .expect(404)

    expect(response.status).toEqual(404)
    expect(response.body).toEqual({
      status: 404,
      statusText: 'Not Found',
      message: 'Not found page -- /',
    })
  })
  test('should return status 404 if user access not available route', async () => {
    const response = await request(app)
      .get('/abc')
      .expect('Content-Type', /json/)
      .expect(404)

    expect(response.status).toEqual(404)
    expect(response.body).toEqual({
      status: 404,
      statusText: 'Not Found',
      message: 'Not found page -- /abc',
    })
  })
})
