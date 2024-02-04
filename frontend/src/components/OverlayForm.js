// src/components/OverlayForm.js

import React, { useState } from 'react';
import axios from 'axios';

const OverlayForm = () => {
  const [position, setPosition] = useState('');
  const [size, setSize] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/overlays', { position, size, content });
      console.log(res.data); // Log response from the server
      // You can add additional logic for handling success/error messages or resetting the form
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Create Overlay</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <div>
          <label>Size:</label>
          <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OverlayForm;
