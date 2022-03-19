const { notFoundPage } = require('../../src/middlewares/errorMiddleware')

describe('Not Found Page Middleware', () => {
  let mockRequest
  let mockResponse
  const nextFunction = jest.fn()

  beforeEach(() => {
    mockRequest = {}
    mockResponse = {
      status: jest.fn(),
      json: jest.fn(),
    }
  })

  test('should response with status code 404', () => {
    notFoundPage(mockRequest, mockResponse, nextFunction)

    expect(mockResponse.status).toBeCalledWith(404)
    expect(nextFunction).toBeCalledTimes(1)
  })
})
