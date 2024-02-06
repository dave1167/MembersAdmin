
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.string('memNo', 6);
      table.string('title', 15);
      table.string('firstName', 30);
      table.string('lastName', 30);
      table.date('dateJoined');
      table.boolean('gdpr');
      table.boolean('ukTax');
      table.boolean('memCard');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.dropColumn('memNo');
      table.dropColumn('title');
      table.dropColumn('firstName');
      table.dropColumn('lastName');
      table.dropColumn('dateJoined');
      table.dropColumn('gdpr');
      table.dropColumn('ukTax');
      table.dropColumn('memCard');
    })
};
