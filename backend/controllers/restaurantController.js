// backend/controllers/restaurantController.js
const Restaurant = require('../models/restaurant');

const restaurantController = {
  registerRestaurant: async (req, res) => {
    try {
      // Assuming you have the necessary data in the request body
      const {
        RestaurantName,
        Address,
        CountryId,
        City,
        State,
        ZipCode,
        MobileNumber,
        Subdomain,
        CustomDomain,
      } = req.body;

      // Create a new restaurant
      const newRestaurant = await Restaurant.create({
        RestaurantName,
        Address,
        CountryId,
        City,
        State,
        ZipCode,
        MobileNumber,
        Subdomain,
        CustomDomain,
      });

      // Respond with the newly created restaurant
      res.status(201).json(newRestaurant);
    } catch (error) {
      console.error('Error registering restaurant:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = restaurantController;
