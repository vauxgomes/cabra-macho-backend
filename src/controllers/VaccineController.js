const knex = require("../database");

// Controller
module.exports = {
    // Index
    async index(req, res) {
        const { id: user_id } = req.user;
        const { animal_id } = req.params;

        const vaccines = await knex
            .select("vaccines.id", "vaccines.name", "vaccines.code")
            .from("vaccines")
            .innerJoin("animals", "vaccines.animal_id", "animals.id")
            .innerJoin("corrals", "animals.corral_id", "corrals.id")
            .where({ user_id, animal_id });

        return res.json(vaccines);
    },

    // Create
    async create(req, res) {
        try {
            const { id: user_id } = req.user;
            const { animal_id } = req.params;

            const animal = await knex
                .select("animals.*")
                .from("animals")
                .innerJoin("corrals", "animals.corral_id", "corrals.id")
                .where({ user_id, "animals.id": animal_id })
                .first();

            if (animal) {
                const { name, code } = req.body;

                const [id] = await knex("vaccines").insert({
                    animal_id,
                    name,
                    code,
                });

                return res.json({ id });
            } else {
                return res.status(404).send({
                    success: false,
                    message: "vaccine.create.nok",
                });
            }
        } catch (err) {
            console.log(err);

            return res.status(404).send({
                success: false,
                message: "vaccine.create.err",
            });
        }
    },

    // Delete
    async delete(req, res) {
        const { id: user_id } = req.user;
        const { animal_id } = req.params;
        const { id } = req.params;

        try {
            const animal = await knex
                .select("animals.*")
                .from("animals")
                .innerJoin("corrals", "animals.corral_id", "corrals.id")
                .where({ user_id, "animals.id": animal_id })
                .first();

            if (animal) {
                await knex("vaccines").where({ id, animal_id }).del();

                return res.status(200).send({
                    success: true,
                    msg: "vaccine.delete.ok",
                });
            } else {
                return res.status(404).send({
                    success: false,
                    msg: "vaccine.delete.nok",
                });
            }
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: "vaccine.delete.err",
            });
        }
    },
};
