
exports.up = function(knex) {
  return knex.schema
    .dropTable('tbl_user_sbTblRoleUser')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('tbl_user_sbTblRoleUser', async function (table) {
      table.increments('userRoleid').primary().notNullable();
      table.integer('tbl_user_id').unsigned();
      table.foreign('tbl_user_id').references('userId').inTable('tbl_users').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('userID', 255);
      table.string('roleId', 255);
    })
};
