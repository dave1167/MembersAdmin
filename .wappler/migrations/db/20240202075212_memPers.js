
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_mem_pers', async function (table) {
      table.string('tel', 20);
      table.string('mobile', 20);
      table.string('email', 30);
      table.text('notes');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_mem_pers', async function (table) {
      table.dropColumn('tel');
      table.dropColumn('mobile');
      table.dropColumn('email');
      table.dropColumn('notes');
    })
};
