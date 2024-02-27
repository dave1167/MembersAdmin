
exports.up = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.string('tempTitle');
      table.string('tempDescription');
      table.string('template');
      table.integer('templateType');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.dropColumn('tempTitle');
      table.dropColumn('tempDescription');
      table.dropColumn('template');
      table.dropColumn('templateType');
    })
};
