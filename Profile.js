// importing React, useState, and useEffect
import React, { useState, useEffect } from 'react';
// importing CSS file
import './App.css';

// defining Profile component
function Profile() {
  // state for border color  
  const [borderColor, setBorderColor] = useState("#000"); // Initial border color is black

  // useEffect hook
  useEffect(() => {
    // setInterval to change border color
    const interval = setInterval(() => {
      // list of colors to be used  
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff']; // List of colors you want to use
      // getting a random color from the list
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Get a random color from the list
      // setting border color to random color
      setBorderColor(randomColor);
       // changes color every second
    }, 1000);
    // setting cleanup interval
    return () => clearInterval(interval);
  }, []);

  // returning JSX
  return (
    <div>
      <img src={'/ProfilePic.jpg'} alt="Profile" className="profilePic" style={{ borderColor }} />
      <p>Biruk B.</p>
    </div>
  );
}
// exporting Profile component
export default Profile;
