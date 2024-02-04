// src/components/VideoPlayer.js

import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div>
      <h2>Video Player</h2>
      <ReactPlayer url="YOUR_RTSP_URL_HERE" controls={true} />
    </div>
  );
};

export default VideoPlayer;
