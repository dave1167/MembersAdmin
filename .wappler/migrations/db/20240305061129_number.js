
exports.up = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.integer('template').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_emails', async function (table) {
      table.string('template', 255).alter();
    })
};
