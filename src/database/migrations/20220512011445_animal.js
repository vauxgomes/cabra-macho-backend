exports.up = function (knex) {
    console.log("Migration: ANIMALS");

    return knex.schema.createTable("animals", function (table) {
        table.increments("id").primary();

        table.integer("corral_id").notNullable();
        table.foreign("corral_id").references("corrals.id").onDelete("CASCADE");

        table.string("breed", 255).notNullable();
        table.string("food", 255).notNullable();
        table.timestamp("birth");

        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("animals");
};
