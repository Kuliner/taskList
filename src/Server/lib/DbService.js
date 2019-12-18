const { MongoClient } = require('mongodb');

class DbService {
  constructor(app, config) {
    this.app = app;
    this.config = config;
    this.db = {};

    this.connect = this.connect.bind(this);
    this.usersCollection = this.usersCollection.bind(this);
    this.attachDbMiddleware = this.attachDbMiddleware.bind(this);
  }

  attachDbMiddleware(req, res, next) {
    res.dbService = this;
    next();
  }

  usersCollection() {
    return this.db.collection('Users');
  }

  async connect() {
    const client = new MongoClient(this.config.mongo.uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        readPreference: 'secondary',
      });

    this.db = (await client.connect()).db(this.config.mongo.dbName);
    if (this.db) {
      console.log('connected to mongoDb');
    } else {
      console.log('error connecting to mongoDb');
      process.exit(1);
    }
  }
}

module.exports = DbService;
