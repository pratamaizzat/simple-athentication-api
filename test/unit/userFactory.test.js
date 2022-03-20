const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const userFactory = require('../../database/factories/user')

describe('user factory', () => {
  test('should return random user', () => {
    const createdUser = userFactory({})

    expect(createdUser).toEqual(
      expect.objectContaining({
        username: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        confirmed_at: expect.any(Date),
        subscribe: expect.any(Boolean),
        role_id: expect.any(Number),
        last_login: expect.any(Date),
        last_ip: expect.any(String),
      })
    )
  })

  test('should return random hash password', () => {
    const randPassword = crypto.randomBytes(20).toString('hex')
    const createdUser = userFactory({
      password: bcrypt.hashSync(randPassword),
    })

    expect(createdUser.password).not.toBe(randPassword)
    expect(createdUser).toEqual(
      expect.objectContaining({
        username: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        confirmed_at: expect.any(Date),
        subscribe: expect.any(Boolean),
        role_id: expect.any(Number),
        last_login: expect.any(Date),
        last_ip: expect.any(String),
      })
    )
  })
})
