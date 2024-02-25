
exports.up = function(knex) {
  return knex.schema
    .table('tbl_user_sbTbleRoleDesc', async function (table) {
      table.string('roleDesc');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_user_sbTbleRoleDesc', async function (table) {
      table.dropColumn('roleDesc');
    })
};
