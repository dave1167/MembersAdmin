
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_payments', async function (table) {
      table.string('memCategory');
      table.integer('amount');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_payments', async function (table) {
      table.dropColumn('memCategory');
      table.dropColumn('amount');
    })
};
