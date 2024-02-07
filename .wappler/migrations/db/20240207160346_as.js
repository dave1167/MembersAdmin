
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_payments', async function (table) {
      table.integer('memCat');
      table.integer('newRenewal').comment('Shows wether payment is new or renewal');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_payments', async function (table) {
      table.dropColumn('memCat');
      table.dropColumn('newRenewal');
    })
};
