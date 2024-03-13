
exports.up = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.dropColumn('message');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.text('message', 255);
    })
};
