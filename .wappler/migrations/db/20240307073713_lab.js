
exports.up = function(knex) {
  return knex.schema
    .table('tbl_template_fields', async function (table) {
      table.renameColumn('tblName', 'labelName');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_template_fields', async function (table) {
      table.renameColumn('labelName', 'tblName');
    })
};
