const Record = require("../models/DishModel");

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find({ isDeleted: false });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
