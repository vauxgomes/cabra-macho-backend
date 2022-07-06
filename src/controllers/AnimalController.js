const knex = require("../database");

// Controller
module.exports = {
  // Index
  async index(req, res) {
    const { id: user_id } = req.user;
    const { corral_id } = req.params;

    const animals = await knex
      .select(
        "animals.id",
        "code",
        "breed",
        "food",
        "birth",
        "corral_id",
        "corrals.name as corral_name"
      )
      .from("animals")
      .innerJoin("corrals", "animals.corral_id", "corrals.id")
      .innerJoin("users", "corrals.user_id", "users.id")
      .where({ user_id, corral_id });

    return res.json(animals);
  },

  // Show
  async show(req, res) {
    const { id: user_id } = req.user;
    const { corral_id } = req.params;
    const { id } = req.params;

    const animal = await knex
      .select(
        "animals.id",
        "code",
        "breed",
        "food",
        "birth",
        "corral_id",
        "corrals.name as corral_name"
      )
      .from("animals")
      .innerJoin("corrals", "animals.corral_id", "corrals.id")
      .innerJoin("users", "corrals.user_id", "users.id")
      .where({ user_id, corral_id })
      .andWhere("animals.id", id)
      .first();

    const vaccines = await knex
      .select("id", "name", "code", "created_at")
      .from("vaccines")
      .where({ animal_id: id });

    animal['vaccines'] = vaccines

    return res.json(animal);
  },

  // Create
  async create(req, res) {
    try {
      const { id: user_id } = req.user;
      const { corral_id } = req.params;

      const corral = await knex("corrals")
        .select()
        .from("corrals")
        .where({ user_id, id: corral_id })
        .first();

      if (corral) {
        const { code, breed, food, birth } = req.body;

        const [id] = await knex("animals").insert({
          corral_id,
          code,
          breed,
          food,
          birth,
        });

        return res.json({ id });
      } else {
        return res.status(404).send({
          success: false,
          message: "animal.create.nok",
        });
      }
    } catch (err) {
      console.log(err);

      return res.status(404).send({
        success: false,
        message: "animal.create.err",
      });
    }
  },

  // Update
  async update(req, res) {
    const { id: user_id } = req.user;
    const { corral_id } = req.params;
    const { id } = req.params;

    try {
      const corral = await knex("corrals")
        .select()
        .from("corrals")
        .where({ user_id, id: corral_id })
        .first();

      if (corral) {
        const { code, breed, food, birth } = req.body;

        await knex("animals")
          .update({ code, breed, food, birth })
          .where({ id });

        return res.status(200).send({
          success: true,
          msg: "animal.update.ok",
        });
      } else {
        return res.status(404).send({
          success: false,
          msg: "animal.update.nok",
        });
      }
    } catch (err) {
      return res.status(404).send({
        success: false,
        msg: "animal.update.err",
      });
    }
  },

  // DELETE
  async delete(req, res) {
    const { id: user_id } = req.user;
    const { corral_id } = req.params;
    const { id } = req.params;

    try {
      const corral = await knex("corrals")
        .select()
        .from("corrals")
        .where({ user_id, id: corral_id })
        .first();

      if (corral) {
        await knex("animals").where({ id, corral_id }).del();

        return res.status(200).send({
          success: true,
          msg: "animal.delete.ok",
        });
      } else {
        return res.status(404).send({
          success: false,
          msg: "animal.delete.nok",
        });
      }
    } catch (err) {
      return res.status(404).send({
        success: false,
        msg: "animal.delete.err",
      });
    }
  },
};
