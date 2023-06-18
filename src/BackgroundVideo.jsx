import React from 'react';
import vidoebackground from './vidoes/phone video (online-video-cutter.com).mp4'

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source src={vidoebackground} type="video/mp4" />
      </video>
      <div className="video-overlay" />
      
    </div>
  );
};

export default BackgroundVideo;
