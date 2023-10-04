const express = require("express");
const router = express.Router();
// const swaggerDocument = require('../swagger-output.json');
// const swaggerUi = require('swagger-ui-express');

const baseController = require("../controllers");
router.get("/", baseController.getName);


router.use("/contacts", require("./contacts"));

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;

