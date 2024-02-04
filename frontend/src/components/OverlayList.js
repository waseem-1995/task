// src/components/OverlayList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OverlayList = () => {
  const [overlays, setOverlays] = useState([]);

  useEffect(() => {
    const fetchOverlays = async () => {
      try {
        const res = await axios.get('/api/overlays');
        setOverlays(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchOverlays();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/overlays/${id}`);
      setOverlays(overlays.filter((overlay) => overlay._id !== id));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Overlay List</h2>
      <ul>
        {overlays.map((overlay) => (
          <li key={overlay._id}>
            {overlay.content} - {overlay.position} - {overlay.size}
            <button onClick={() => handleDelete(overlay._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayList;
