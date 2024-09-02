const Chef = require('../models/ChefModel');

const signUpChef = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      bio,
      image
    } = req.body;

  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required fields.' });
    }

    const existingChef = await Chef.findOne({ email });
    if (existingChef) {
      return res.status(400).json({ message: 'A chef with this email already exists.' });
    }

 
    const newChef = new Chef({
      name,
      email,
      password, 
      bio,
      image,
      isApproved: false 
    });

    
    const savedChef = await newChef.save();

   
    res.status(201).json({ message: 'Chef created successfully. Awaiting admin approval.', chef: savedChef });
    
    // Notify admin (this part is implementation-dependent, e.g., sending an email or notification)
    // notifyAdminAboutNewChef(savedChef);

  } catch (error) {
    console.error('Error creating chef:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { signUpChef };
