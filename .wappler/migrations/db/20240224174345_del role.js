
exports.up = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.dropColumn('role');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.string('role', 255);
    })
};
