
exports.up = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.renameColumn('UserId', 'userId');
      table.string('userEmail');
      table.string('password');
      table.string('role');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.renameColumn('userId', 'UserId');
      table.dropColumn('userEmail');
      table.dropColumn('password');
      table.dropColumn('role');
    })
};
