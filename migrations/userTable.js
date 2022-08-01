/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//we will take in 
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id', {primaryKey: true});
        table.string('username').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('first_name')
        table.string('last_name')
        table.string('image')
        table.string('about')
    })

}

exports.down = function(knex) {
    return knex.schema.dropTable('users')
}