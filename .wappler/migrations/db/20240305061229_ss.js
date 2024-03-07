
exports.up = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.string('attachment');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.dropColumn('attachment');
    })
};
