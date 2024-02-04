

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const overlayRoutes = require('./routes/overlayRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/overlayApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/overlays', overlayRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
