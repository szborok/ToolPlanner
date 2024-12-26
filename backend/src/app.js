require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const toolRoutes = require('./routes/toolRoutes');
const workRoutes = require('./routes/workRoutes');

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB Atlas
connectDB();

// Routes
app.use('/api/tools', toolRoutes);
app.use('/api/works', workRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});