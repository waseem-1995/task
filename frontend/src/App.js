
import './App.css';
import React from 'react';
import OverlayForm from './components/OverlayForm';
import VideoPlayer from './components/VideoPlayer';
import OverlayList from './components/OverlayList';
function App() {
  return (
    <div className="App">
      <h1>Overlay App</h1>
      <VideoPlayer />
      <OverlayForm />
      <OverlayList/>
    </div>
  );
}

export default App;
