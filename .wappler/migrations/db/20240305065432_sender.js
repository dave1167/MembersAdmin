
exports.up = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.integer('sendStatus');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.dropColumn('sendStatus');
    })
};
