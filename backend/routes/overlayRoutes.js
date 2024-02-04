// overlayRoutes.js

const express = require('express');
const router = express.Router();
const Overlay = require('../model/model');

// Get all overlays
router.get('/', async (req, res) => {
  try {
    const overlays = await Overlay.find();
    res.json(overlays);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Create Overlay
router.post('/', async (req, res) => {
  try {
    const { position, size, content } = req.body;
    const newOverlay = new Overlay({ position, size, content });
    const overlay = await newOverlay.save();
    res.json(overlay);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get single overlay by ID
router.get('/:id', async (req, res) => {
  try {
    const overlay = await Overlay.findById(req.params.id);
    if (!overlay) {
      return res.status(404).json({ msg: 'Overlay not found' });
    }
    res.json(overlay);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update overlay by ID
router.put('/:id', async (req, res) => {
  const { position, size, content } = req.body;

  // Build overlay object
  const overlayFields = {};
  if (position) overlayFields.position = position;
  if (size) overlayFields.size = size;
  if (content) overlayFields.content = content;

  try {
    let overlay = await Overlay.findById(req.params.id);

    if (!overlay) return res.status(404).json({ msg: 'Overlay not found' });

    overlay = await Overlay.findByIdAndUpdate(
      req.params.id,
      { $set: overlayFields },
      { new: true }
    );

    res.json(overlay);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete overlay by ID
router.delete('/:id', async (req, res) => {
  try {
    let overlay = await Overlay.findById(req.params.id);

    if (!overlay) return res.status(404).json({ msg: 'Overlay not found' });

    await Overlay.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Overlay removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


