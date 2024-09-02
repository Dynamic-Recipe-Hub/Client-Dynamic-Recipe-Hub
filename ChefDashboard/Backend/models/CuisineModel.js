const mongoose = require('mongoose');

// Define the schema for Cuisine
const cuisineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

// Compile and export the Cuisine model
const Cuisine = mongoose.model('Cuisine', cuisineSchema);
module.exports = Cuisine;