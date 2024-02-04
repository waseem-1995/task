
const mongoose = require('mongoose');

const OverlaySchema = new mongoose.Schema({
  position: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Overlay', OverlaySchema);


