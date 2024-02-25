
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_users', async function (table) {
      table.increments('UserId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_users')
};
