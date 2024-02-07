
exports.up = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.date('dateJoined').defaultTo(knex.fn.now()).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_member_details', async function (table) {
      table.date('dateJoined').defaultTo().alter();
    })
};
