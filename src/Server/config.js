const dotenv = require('dotenv');
const path = require('path');

const environment = dotenv.config({ path: path.resolve(__dirname, `.env-${process.env.NODE_ENV}`) });
const config = {
  mongo: {
    url: environment.parsed.mongo_url,
    username: environment.parsed.mongo_username,
    password: environment.parsed.mongo_password,
    dbName: environment.parsed.mongo_dbName,
  },
};

if (process.env.NODE_ENV === 'development') config.mongo.uri = `mongodb://${config.mongo.username}:${config.mongo.password}@${config.mongo.url}:27017`;
if (process.env.NODE_ENV === 'production') config.mongo.uri = `mongodb://${config.mongo.username}:${config.mongo.password}@${config.mongo.url}`;

module.exports = config;
