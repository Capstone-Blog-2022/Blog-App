/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users');
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.string('body').notNullable()
        table.string('comments')
        table.string('hashtags')
        table.string('category').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.boolean('isDraft')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('posts')
};
