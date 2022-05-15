const knex = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Controller
module.exports = {
    async register(req, res) {
        try {
            const { username, password } = req.body;

            const user = await knex
                .select("id", "password")
                .from("users")
                .where("username", username)
                .first();

            if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({ id: user.id }, process.env.KEY);

                return res.json({
                    success: true,
                    msg: "user.login.ok",
                    token,
                });
            } else {
                return res.json({
                    success: false,
                    msg: "user.login.nok",
                });
            }
        } catch (err) {
            return res.status(400).json({
                success: false,
                msg: "user.login.error",
            });
        }
    },
};
