
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.integer('memNo').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.string('memNo', 6).alter();
    })
};
