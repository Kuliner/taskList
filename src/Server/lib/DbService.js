const { MongoClient } = require('mongodb');

class DbService {
  constructor(app, config) {
    this.app = app;
    this.config = config;

    this.connect.bind(this);
  }

  connect() {
    const client = new MongoClient(this.config.mongo.uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        readPreference: 'secondary',
      });

    client.connect((err, db) => {
      if (err) console.log(err);
      this.db = db;
      console.log('connected');
    });
  }
}

module.exports = DbService;
