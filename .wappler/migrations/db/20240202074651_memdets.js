
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_member_details', async function (table) {
      table.increments('memDetsId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_member_details')
};
