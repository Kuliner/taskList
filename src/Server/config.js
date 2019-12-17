const dotenv = require('dotenv');
const path = require('path');

const enviroment = dotenv.config({ path: path.resolve(__dirname, `.env-${process.env.NODE_ENV}`) });

const config = {
  mongo: {
    url: enviroment.parsed.mongo_url,
    username: enviroment.parsed.mongo_username,
    password: enviroment.parsed.mongo_password,
    dbName: enviroment.parsed.mongo_dbName,
  },
};

config.mongo.uri = `mongodb://${config.mongo.url}:27017`;

module.exports = config;
