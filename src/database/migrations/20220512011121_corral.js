exports.up = function (knex) {
    console.log("Migration: CORRALS");

    return knex.schema.createTable("corrals", function (table) {
        table.increments("id").primary();

        table.string("name", 255).notNullable();

        table.integer("user_id").notNullable();
        table.foreign("user_id").references("users.id").onDelete("CASCADE");

        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("corrals");
};
