
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_mem_address', async function (table) {
      table.string('address1', 60);
      table.string('address2', 60);
      table.string('town1', 60);
      table.string('town2', 60);
      table.string('postcode', 12);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_detail_stbl_mem_address', async function (table) {
      table.dropColumn('address1');
      table.dropColumn('address2');
      table.dropColumn('town1');
      table.dropColumn('town2');
      table.dropColumn('postcode');
    })
};
