const express = require('express');
const router = express.Router();
const toolController = require('../controllers/toolController');

// Example: Get all tools
router.get('/', toolController.getTools);

// Add other routes for tool creation, updates, and deletion

module.exports = router;
