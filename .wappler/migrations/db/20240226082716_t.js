
exports.up = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.text('template').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.string('template', 255).alter();
    })
};
