const Work = require('../models/workModel');

// Example: Get all works
exports.getWorks = async (req, res) => {
  try {
    const works = await Work.find();
    res.status(200).json(works);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add more functions for CRUD operations (Create, Update, Delete)
