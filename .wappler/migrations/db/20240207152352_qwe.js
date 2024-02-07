
exports.up = function(knex) {
  return knex.schema
    .table('tbl_membershipType', async function (table) {
      table.string('memTypeDesc');
      table.decimal('cost');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_membershipType', async function (table) {
      table.dropColumn('memTypeDesc');
      table.dropColumn('cost');
    })
};
