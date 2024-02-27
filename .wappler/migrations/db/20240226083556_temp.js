
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_template_fields', async function (table) {
      table.increments('tmpFieldId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_template_fields')
};
