const { errorHandler } = require('../../src/middlewares/errorMiddleware')

describe('Error Handle Middleware', () => {
  let mockError
  let mockRequest
  let mockResponse
  const nextFunction = jest.fn()

  beforeEach(() => {
    mockError = {}
    mockRequest = {}
    mockResponse = {
      statusCode: jest.fn(),
      status: jest.fn(),
      json: jest.fn(),
    }
  })

  test('should return with status code 500', () => {
    mockResponse = {
      status: jest.fn(),
      statusCode: 200,
      json: jest.fn(),
    }

    mockError = {
      message: 'Internal server error',
    }
    errorHandler(mockError, mockRequest, mockResponse, nextFunction)

    expect(mockResponse.status).toBeCalledWith(500)
    expect(mockResponse.json).toBeCalledWith({
      status: 500,
      message: 'Internal server error',
    })
  })

  test('should return with status code 404', () => {
    mockResponse = {
      status: jest.fn(),
      statusCode: 404,
      json: jest.fn(),
    }

    mockError = {
      message: 'Not found page -- /',
    }
    errorHandler(mockError, mockRequest, mockResponse, nextFunction)

    expect(mockResponse.status).toBeCalledWith(404)
    expect(mockResponse.json).toBeCalledWith({
      status: 404,
      message: 'Not found page -- /',
    })
  })
})
