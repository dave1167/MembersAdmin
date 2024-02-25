
exports.up = function(knex) {
  return knex.schema
    .renameTable('tbl_user_bTblRoleUser', 'tbl_user_sTblRoleUser')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('tbl_user_sTblRoleUser', 'tbl_user_bTblRoleUser')
};
