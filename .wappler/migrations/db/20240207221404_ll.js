
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.integer('memCategory');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.dropColumn('memCategory');
    })
};
