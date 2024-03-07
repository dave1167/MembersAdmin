
exports.up = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.text('message').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.string('message', 255).alter();
    })
};
