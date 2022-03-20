const tableNames = require('../../src/constants/tableNames')
const { addDefaultColumns, references } = require('../../src/utils/table')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.USER, (table) => {
    table.increments().notNullable()
    table.string('email', 254).notNullable().unique()
    table.string('username', 254).notNullable().unique()
    table.string('password', 127).notNullable()
    table.datetime('last_login')
    table.datetime('confirmed_at')
    table.string('last_ip')
    table.boolean('subscribe').notNullable().defaultTo(false)
    references(table, tableNames.ROLE)
    addDefaultColumns(table)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTableIfExists(tableNames.USER)
}
