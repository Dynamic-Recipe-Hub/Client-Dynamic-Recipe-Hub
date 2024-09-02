const Dish = require("../models/DishModel");



// Function to create a new dish
const createDish = async (req, res) => {
  try {
    // Extract dish details from the request body
    const {
      name,
      description,
      price,
      chef,
      images,
      availableQuantity,
      size,
      cuisine
    } = req.body;

    // Validate required fields
    // if (!name || !price || !chef) {
    //   return res.status(400).json({ message: 'Name, price, and chef are required fields.' });
    // }

    // Create a new Dish instance
    const newDish = new Dish({
      name,
      description,
      price,
      chef,
      images: images || [],
      availableQuantity: availableQuantity || 0,
      size: size || 'medium',
      cuisine
    });

    // Save the dish to the database
    const savedDish = await newDish.save();

    // Respond with success message and the created dish
    res.status(201).json({ message: 'Dish created successfully', dish: savedDish });
  } catch (error) {
    console.error('Error creating dish:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { createDish };
