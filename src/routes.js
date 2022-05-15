const express = require("express");
const routes = express.Router();

// Middlewares
const auth = require("./middlewares/auth");

//
const AccountsController = require("./controllers/AccountsController");
const UserController = require("./controllers/UserController");
const CorralController = require("./controllers/CorralController");
const AnimalController = require("./controllers/AnimalController");

// // Accounts
routes.post("/login", AccountsController.register);

// Users
// routes.get("/users/", auth, UserController.index);
routes.get("/users/", auth, UserController.show);
routes.post("/users", UserController.create);
routes.put("/users/", auth, UserController.update);
routes.delete("/users/", auth, UserController.delete);

// Corrals
routes.get("/corrals/", auth, CorralController.index);
routes.get("/corrals/:id", auth, CorralController.show);
routes.post("/corrals", auth, CorralController.create);
routes.put("/corrals/:id", auth, CorralController.update);
routes.delete("/corrals/:id", auth, CorralController.delete);

// Animals
routes.get("/corrals/:corral_id/animals/", auth, AnimalController.index);
routes.get("/corrals/:corral_id/animals/:id", auth, AnimalController.show);
routes.post("/corrals/:corral_id/animals/", auth, AnimalController.create);
routes.put("/corrals/:corral_id/animals/:id", auth, AnimalController.update);
routes.delete("/corrals/:corral_id/animals/:id", auth, AnimalController.delete);

// Export
module.exports = routes;
