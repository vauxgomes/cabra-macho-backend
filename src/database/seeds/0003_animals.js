const { hashSync } = require("bcrypt");
const SALT = Number(process.env.SALT);

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("animals").del();
  await knex("animals").insert([
    {
      corral_id: 1,
      code: "A0000001",
      breed: "Raça 1",
      food: "Alimentação 1",
    },
    {
      corral_id: 1,
      code: "A0000002",
      breed: "Raça 2",
      food: "Alimentação 2",
    },
    {
      corral_id: 2,
      code: "A0000003",
      breed: "Raça 3",
      food: "Alimentação 3",
    },
    {
      corral_id: 3,
      code: "A0000004",
      breed: "Raça 4",
      food: "Alimentação 4",
    },
  ]);
};
