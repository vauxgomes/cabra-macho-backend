exports.up = function (knex) {
    console.log("Migration: USERS");

    return knex.schema.createTable("users", function (table) {
        table.increments("id").primary();

        table.string("name", 255).notNullable();
        table.string("username", 20).unique().notNullable();
        table.string("password", 100).notNullable();

        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
