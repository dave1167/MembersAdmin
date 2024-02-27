
exports.up = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.text('tempDescription').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.string('tempDescription', 255).alter();
    })
};
