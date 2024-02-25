
exports.up = function(knex) {
  return knex.schema
    .table('tbl_user_role', async function (table) {
      table.string('userId');
      table.string('role');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_user_role', async function (table) {
      table.dropColumn('userId');
      table.dropColumn('role');
    })
};
