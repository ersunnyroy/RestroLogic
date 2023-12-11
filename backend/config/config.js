// backend/config/config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'restrologic',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'restrologic',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
};
