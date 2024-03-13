
exports.up = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.binary('message', 255).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.json('message', 255).alter();
    })
};
