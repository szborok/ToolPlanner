const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  name: String,
  factoryNumber: String,
  diameter: Number,
  currentToolLife: Number,
  maxToolLife: Number,
  status: String,
  usageHistory: [String],  // You can customize this based on your needs
});

const Tool = mongoose.model('Tool', toolSchema);
module.exports = Tool;
