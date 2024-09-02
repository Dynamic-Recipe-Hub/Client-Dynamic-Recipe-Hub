const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    bio: String,
    image: { type: String },
    isApproved: { type: Boolean, default: false }
});

const Chef = mongoose.model('Chef', chefSchema);
module.exports = Chef;

