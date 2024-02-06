
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.string('status');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.dropColumn('status');
    })
};
