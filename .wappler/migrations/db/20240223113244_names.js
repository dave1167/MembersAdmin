
exports.up = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.string('usrFirstName');
      table.string('usrLastName');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.dropColumn('usrFirstName');
      table.dropColumn('usrLastName');
    })
};
