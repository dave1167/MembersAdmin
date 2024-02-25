
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_user_s', async function (table) {
      table.increments('userRoleid');
      table.integer('tbl_user_id').unsigned();
      table.foreign('tbl_user_id').references('userId').inTable('tbl_users').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_user_s')
};
