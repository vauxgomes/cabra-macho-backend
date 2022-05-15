const { hashSync } = require("bcrypt");
const SALT = Number(process.env.SALT);

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("users").del();
    await knex("users").insert([
        {
            name: "Admin",
            username: "admin",
            password: hashSync("12345", Number(SALT)),
        },
    ]);
};
