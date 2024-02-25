
exports.up = function(knex) {
  return knex.schema
    .dropTable('tbl_user_sbTbleRoleDesc')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('tbl_user_sbTbleRoleDesc', async function (table) {
      table.increments('roleDescId').primary().notNullable();
      table.integer('tbl_user_id').unsigned();
      table.foreign('tbl_user_id').references('userId').inTable('tbl_users').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('roleDesc', 255);
    })
};
