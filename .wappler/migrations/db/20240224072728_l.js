
exports.up = function(knex) {
  return knex.schema
    .dropTable('tbl_role')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('tbl_role', async function (table) {
      table.increments('roleId').primary().notNullable();
      table.string('roleDescription', 255);
    })
};
