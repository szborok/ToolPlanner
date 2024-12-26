const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  workTitle: String,
  toolAssigned: { type: mongoose.Schema.Types.ObjectId, ref: 'Tool' },
  workDate: Date,
  workDetails: String,  // You can add more fields as per requirements
});

const Work = mongoose.model('Work', workSchema);
module.exports = Work;
