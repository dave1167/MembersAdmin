
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_payment_type', async function (table) {
      table.increments('payTypeid');
      table.string('description');
    })
    .table('tbl_member_details', async function (table) {
      table.integer('status').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.string('status', 255).alter();
    })
    .dropTable('tbl_payment_type')
};
