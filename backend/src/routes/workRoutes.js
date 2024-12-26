const express = require('express');
const router = express.Router();
const workController = require('../controllers/workController');

// Example: Get all works
router.get('/', workController.getWorks);

// Add other routes for work creation, updates, and deletion

module.exports = router;
