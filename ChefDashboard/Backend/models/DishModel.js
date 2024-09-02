const mongoose = require('mongoose');

// Define the schema for a Dish
const dishSchema = new mongoose.Schema({
  name: { 
    type: String
  },
  description: String,
  price: { 
    type: Number 
  },
  chef: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Chef' 
  },
  approved: { 
    type: Boolean, 
    default: false 
  },
  isDeleted: { 
    type: Boolean, 
    default: false 
  }, // حقل الحذف الناعم
  images: [
    {
      type: String
    },
  ],
  availableQuantity: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'], // example sizes, you can customize this
    default: 'medium',
  },
  cuisine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cuisine',
  },
  orderCount: {
    type: Number,
    default: 0,
  }
});

// Compile and export the Dish model
const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
