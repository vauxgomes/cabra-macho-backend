const { hashSync } = require("bcrypt");
const SALT = Number(process.env.SALT);

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("corrals").del();
  await knex("corrals").insert([
    {
      name: "Curral 1",
      user_id: 1,
    },

    {
      name: "Curral 2",
      user_id: 1,
    },

    {
      name: "Curral 3",
      user_id: 1,
    },

    {
      name: "Curral 4",
      user_id: 1,
    },
  ]);
};
