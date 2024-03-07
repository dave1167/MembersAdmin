
exports.up = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.string('emailSubjectLine');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.dropColumn('emailSubjectLine');
    })
};
