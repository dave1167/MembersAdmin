
exports.up = function(knex) {
  return knex.schema
    .renameTable('tbl_user_s', 'tbl_user_bTblRoleUser')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('tbl_user_bTblRoleUser', 'tbl_user_s')
};
