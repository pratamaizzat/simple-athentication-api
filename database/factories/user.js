const { faker } = require('@faker-js/faker')

function user({ userName, email, password, subscribe, roleId }) {
  return {
    username: userName || faker.internet.userName(),
    email: email || faker.internet.email(),
    password: password || '5cad6d503c04e160fa91e3',
    confirmed_at: faker.date.soon(2),
    subscribe: subscribe || false,
    role_id: roleId || 3,
    last_login: faker.date.soon(2),
    last_ip: faker.internet.ip(),
  }
}

module.exports = user
