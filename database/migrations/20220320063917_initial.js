const tableNames = require('../../src/constants/tableNames')
const { createNameTable } = require('../../src/utils/table')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await createNameTable(knex, tableNames.ROLE)
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTableIfExists(tableNames.ROLE)
}
