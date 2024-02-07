
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_member_detail_stbl_payments', async function (table) {
      table.increments('paymentId');
      table.integer('tbl_member_detail_id').unsigned();
      table.foreign('tbl_member_detail_id').references('memDetsId').inTable('tbl_member_details').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_member_detail_stbl_payments')
};
