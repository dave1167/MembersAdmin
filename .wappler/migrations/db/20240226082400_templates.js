
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_templates', async function (table) {
      table.increments('templateId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_templates')
};
