const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const mongodb = require("./db/connect");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"))
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));;

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.port || 3000);
    console.log("MongoDb is connected");
    console.log(`Connected to DB. Web Server is listening on port ${port}`);
  }
});
