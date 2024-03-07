
exports.up = function(knex) {
  return knex.schema
    .table('tbl_template_fields', async function (table) {
      table.string('field');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_template_fields', async function (table) {
      table.dropColumn('field');
    })
};
