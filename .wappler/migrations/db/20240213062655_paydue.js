
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.date('payDueDate');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.dropColumn('payDueDate');
    })
};
