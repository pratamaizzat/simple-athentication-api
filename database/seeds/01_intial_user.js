const bcrypt = require('bcryptjs')
const userFactory = require('../factories/user')
const tableNames = require('../../src/constants/tableNames')
require('dotenv').config()

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  const [superAdmin, admin, commonUser] = await Promise.all([
    knex(tableNames.ROLE).where({ name: 'super_admin' }).first(),
    knex(tableNames.ROLE).where({ name: 'admin' }).first(),
    knex(tableNames.ROLE).where({ name: 'common_user' }).first(),
  ])

  const userSuperAdmin = userFactory({
    userName: 'super_admin01',
    email: 'super_admin@example.com',
    roleId: superAdmin.id,
    password: bcrypt.hashSync(process.env.SECRET_PASSWORD_SUPER_ADMIN),
  })

  const createUser = [userSuperAdmin]

  for (let i = 0; i < 10; i++) {
    createUser.push(
      userFactory({
        roleId: admin.id,
        password: bcrypt.hashSync('admin123!!!'),
      })
    )
  }

  for (let i = 0; i < 20; i++) {
    createUser.push(
      userFactory({
        roleId: commonUser.id,
        password: bcrypt.hashSync('common123!!!'),
      })
    )
  }
  await knex(tableNames.USER).insert(createUser)
}
