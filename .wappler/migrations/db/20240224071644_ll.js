
exports.up = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.string('password', 14).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.binary('password', 255).alter();
    })
};
