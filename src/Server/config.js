const dotenv = require('dotenv');

dotenv.config({ path: `/environments/${process.env.NODE_ENV}.env` });

const config = {
  mongo: {
    url: process.env.mongo.url,
    username: process.env.mongo.username,
    password: process.env.mongo.password,
    dbName: process.env.mongo.dbName,
  },
};

config.mongo.uri = `mongodb+srv://${config.mongo.username}:${config.mongo.password}@${config.mongo.url}`;

module.exports = config;
