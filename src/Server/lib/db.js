const { MongoClient } = require('mongodb');
const config = require('../config');

const client = new MongoClient(config.mongo.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
