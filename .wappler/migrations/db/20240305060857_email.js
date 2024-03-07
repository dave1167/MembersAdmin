
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_emails', async function (table) {
      table.increments('emailId');
      table.string('message');
      table.string('subject');
      table.string('recipient');
      table.string('remplate');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_emails')
};
