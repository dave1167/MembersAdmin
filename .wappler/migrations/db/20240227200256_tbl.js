
exports.up = function(knex) {
  return knex.schema
    .table('tbl_template_fields', async function (table) {
      table.string('tblName');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_template_fields', async function (table) {
      table.dropColumn('tblName');
    })
};
