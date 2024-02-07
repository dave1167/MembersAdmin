
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_membershipType', async function (table) {
      table.increments('memTypeId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_membershipType')
};
