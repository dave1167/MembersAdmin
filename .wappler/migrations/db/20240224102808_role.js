
exports.up = function(knex) {
  return knex.schema
    .table('tbl_role', async function (table) {
      table.string('roleDesc');
    })
    .then(async () => {
      await knex('tbl_role').insert({"roleDesc":"Administrator"})
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_role', async function (table) {
      table.dropColumn('roleDesc');
    })
};
