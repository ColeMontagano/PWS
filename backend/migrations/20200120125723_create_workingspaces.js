
exports.up = function(knex) {
        return knex.schema.createTable('workingspaces', function (table) {
            table.increments('id').primary()
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
            table.string('country')
            table.string('city')
            table.string('address')
            table.string('name').notNullable()
            table.integer('privacy')
            table.integer('noise')
            table.integer('popularity')
            table.integer('security')
            table.integer('wifiSpeed')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('workingspaces')
};
