const express = require("express");
const routes = express.Router();
const swaggerDocument = require("../swagger-output.json");
const swaggerUi = require("swagger-ui-express");

const contactsController = require("../controllers/contacts");

routes.get("/", contactsController.getAll);

routes.get("/:id", contactsController.getSingle);

routes.post("/", contactsController.createContact);

routes.put("/:id", contactsController.updateContact);

routes.delete("/:id", contactsController.deleteContact);

routes.use("/api-docs", swaggerUi.serve);
routes.get("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = routes;
