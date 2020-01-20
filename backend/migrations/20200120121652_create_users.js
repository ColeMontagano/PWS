
exports.up = function(knex) {
        return knex.schema.createTable('users', function (table) {
            table.increments('id').primary()
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
            table.string('email')
                  .unique()
                  .notNullable()
        })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
