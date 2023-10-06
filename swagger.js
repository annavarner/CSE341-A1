const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "An API to list & manage contacts built for CSE341",
  },
  host: "cse341-2ph6.onrender.com",
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js", "./routes/contacts.js"];

swaggerAutogen(outputFile, routes, doc);
