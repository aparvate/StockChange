const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://amoghparvate:Smokinontop5s%2F@atlascluster.rlmdcvi.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, uri) {
      if (uri)
      {
        _db = uri.db("employees");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};
