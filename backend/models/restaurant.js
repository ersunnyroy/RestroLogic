// backend/models/restaurant.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Restaurant = sequelize.define(
  'Restaurant',
  {
    RestaurantID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    RestaurantName: {
      type: DataTypes.STRING,
      unique: true,
    },
    Address: {
      type: DataTypes.STRING,
    },
    CountryId: {
      type: DataTypes.INTEGER,
    },
    City: {
      type: DataTypes.STRING,
    },
    State: {
      type: DataTypes.STRING,
    },
    ZipCode: {
      type: DataTypes.STRING,
    },
    MobileNumber: {
      type: DataTypes.STRING,
    },
    Subdomain: {
      type: DataTypes.STRING,
      unique: true,
    },
    CustomDomain: {
      type: DataTypes.STRING,
      unique: true,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'restaurants', // specify the table name if it's different from the model name
  }
);

module.exports = Restaurant;
