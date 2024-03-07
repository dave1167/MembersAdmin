
exports.up = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.renameColumn('remplate', 'template');
      table.string('sender');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.renameColumn('template', 'remplate');
      table.dropColumn('sender');
    })
};
