
exports.up = function(knex) {
  return knex.schema
    .dropTable('tblRoleTypes')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('tblRoleTypes', async function (table) {
      table.increments('roleTypeId').primary().notNullable();
      table.string('description', 255);
    })
};
