const dotenv = require('dotenv');
dotenv.config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
    
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// const mongoURL = process.env.MONGODB_URI;

// const MongoClient = require('mongodb').MongoClient;

// let _db;

// const initDb = (callback) => {
//   if (_db) {
//     console.log('Db is already initialized!');
//     return callback(null, _db);
//   }
//   MongoClient.connect(mongoURL)
//     .then((client) => {
//       _db = client;
//       callback(null, _db);
//     })
//     .catch((err) => {
//       callback(err);
//     });
// };

// const getDb = () => {
//   if (!_db) {
//     throw Error('Db not initialized');
//   }
//   return _db;
// };

// module.exports = {
//   initDb,
//   getDb,
// };
/////////////////////////////////////////////////////////////////////////////////////////////////

// const { MongoClient } = require('mongodb');

// async function main() {
//     const uri = "mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD@cluster0.agsy7d3.mongodb.net/test?retryWrites=true&w=majority";
    
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();

//         await listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     }
//     finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


