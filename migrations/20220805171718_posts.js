/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users');
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.string('body').notNullable()
        table.boolean('isDraft')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('posts')
};
