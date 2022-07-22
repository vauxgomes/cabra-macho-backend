const { hashSync } = require("bcrypt");
const SALT = Number(process.env.SALT);

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("vaccines").del();
  await knex("vaccines").insert([
    {
      animal_id: 1,
      name: "Vacina 1",
      code: "A0000001",
    },
    {
      animal_id: 1,
      name: "Vacina 2",
      code: "A0000002",
    },
    {
      animal_id: 2,
      name: "Vacina 1",
      code: "A0000003",
    },
    {
      animal_id: 3,
      name: "Vacina 2",
      code: "A0000004",
    },
  ]);
};
