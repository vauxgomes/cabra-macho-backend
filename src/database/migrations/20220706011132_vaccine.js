exports.up = function (knex) {
  console.log("Migration: VACCINES");

  return knex.schema.createTable("vaccines", function (table) {
      table.increments("id").primary();

      table.integer("animal_id").notNullable();
      table.foreign("animal_id").references("animals.id").onDelete("CASCADE");

      table.string("name", 255).notNullable();
      table.string("code", 255);

      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("vaccines");
};
