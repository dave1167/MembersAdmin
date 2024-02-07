
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_payments', async function (table) {
      table.dropColumn('memCategory');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_payments', async function (table) {
      table.string('memCategory', 255);
    })
};
