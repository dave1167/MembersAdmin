
exports.up = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.text('password').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.string('password', 255).alter();
    })
};
