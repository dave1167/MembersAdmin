
exports.up = function(knex) {
  return knex.schema
    .table('tbl_user_sTblRoleUser', async function (table) {
      table.string('userID');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_user_sTblRoleUser', async function (table) {
      table.dropColumn('userID');
    })
};
