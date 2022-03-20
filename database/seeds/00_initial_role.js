const tableNames = require('../../src/constants/tableNames')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await Promise.all(Object.values(tableNames).map((name) => knex(name).del()))

  await knex(tableNames.ROLE).insert([
    {
      name: 'super_admin',
    },
    {
      name: 'admin',
    },
    {
      name: 'common_user',
    },
  ])
}
