
exports.up = function(knex) {
  return knex.schema
    .table('tbl_user_sTblRoleUser', async function (table) {
      table.string('roleId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_user_sTblRoleUser', async function (table) {
      table.dropColumn('roleId');
    })
};
