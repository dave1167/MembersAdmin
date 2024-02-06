
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.string('status', 255).defaultTo(1).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.string('status', 255).defaultTo().alter();
    })
};
