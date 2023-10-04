const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'https://cse341-2ph6.onrender.com'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js', './routes/contacts.js'];


swaggerAutogen(outputFile, routes, doc);