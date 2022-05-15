const knex = require("../database");

// Controller
module.exports = {
    // Index
    async index(req, res) {
        const { id: user_id } = req.user;
        const corrals = await knex
            .select("id", "name")
            .from("corrals")
            .where({ user_id });

        return res.json(corrals);
    },

    // Show
    async show(req, res) {
        const { id: user_id } = req.user;
        const { id } = req.params;

        const corral = await knex
            .select("id", "name")
            .from("corrals")
            .where({ id, user_id })
            .first();

        return res.json(corral);
    },

    // Create
    async create(req, res) {
        try {
            const { id: user_id } = req.user;
            const { name } = req.body;

            const [id] = await knex("corrals").insert({
                user_id,
                name,
            });

            return res.json({ id });
        } catch (err) {
            return res.status(404).send({
                success: false,
                message: "corral.create.nok",
            });
        }
    },

    // Update
    async update(req, res) {
        const { id: user_id } = req.user;
        const { id } = req.params;
        const { name } = req.body;

        try {
            const a = await knex("corrals")
                .update({ name })
                .where({ id, user_id });

            return res.status(200).send({
                success: true,
                msg: "corral.update.ok",
            });
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: "corral.update.nok",
            });
        }
    },

    // DELETE
    async delete(req, res) {
        const { id: user_id } = req.user;
        const { id } = req.params;

        try {
            await knex("corrals").where({ id, user_id }).del();

            return res.status(200).send({
                success: true,
                msg: "corral.delete.ok",
            });
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: "corral.delete.nok",
            });
        }
    },
};
