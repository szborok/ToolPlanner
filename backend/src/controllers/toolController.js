const Tool = require('../models/toolModel');

// Example: Get all tools
exports.getTools = async (req, res) => {
  try {
    const tools = await Tool.find();
    res.status(200).json(tools);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add more functions for CRUD operations (Create, Update, Delete)
