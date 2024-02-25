
exports.up = function(knex) {
  return knex.schema
    .renameTable('tbl_user_sTblRoleUser', 'tbl_user_sbTblRoleUser')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('tbl_user_sbTblRoleUser', 'tbl_user_sTblRoleUser')
};
