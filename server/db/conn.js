const { MongoClient } = require('mongodb');

const connectionString = 'mongodb+srv://Admin:9JF3eaPDAlqo7lQ0@cluster0.2tun0.azure.mongodb.net/project';
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let dbConnection;

module.exports = {
  connectToServer(callback) {
    client.connect((err, db) => {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('sample_airbnb');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb() {
    return dbConnection;
  }
};
