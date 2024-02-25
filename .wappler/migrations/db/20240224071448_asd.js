
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_role', async function (table) {
      table.increments('roleId');
      table.string('roleDescription');
    })
    .createTable('tbl_user_role', async function (table) {
      table.increments('userRoleId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_user_role')
    .dropTable('tbl_role')
};
