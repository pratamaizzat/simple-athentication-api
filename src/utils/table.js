function addDefaultColumns(table) {
  table.timestamps(false, true)
  table.datetime('deleted_at')
}

function createNameTable(knex, tableName) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments().notNullable()
    table.string('name').notNullable().unique()
    addDefaultColumns(table)
  })
}

function references(table, tableName, notNullable = true, columnName = '') {
  const definition = table
    .integer(`${columnName || tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade')

  if (notNullable) {
    definition.notNullable()
  }
  return definition
}

module.exports = { addDefaultColumns, createNameTable, references }
