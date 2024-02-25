
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_user_sbTblUserRole_sbTbleRoles', async function (table) {
      table.increments('sTbId');
      table.integer('sbTblUserRole_id').unsigned();
      table.foreign('sbTblUserRole_id').references('userRoleid').inTable('tbl_user_sbTblUserRole').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_user_sbTblUserRole_sbTbleRoles')
};
