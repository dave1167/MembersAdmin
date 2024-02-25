
exports.up = function(knex) {
  return knex.schema
    .createTable('tblRoleTypes', async function (table) {
      table.increments('roleTypeId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tblRoleTypes')
};
