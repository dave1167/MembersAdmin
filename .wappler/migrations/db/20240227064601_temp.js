
exports.up = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.boolean('templateType').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_templates', async function (table) {
      table.integer('templateType').alter();
    })
};
