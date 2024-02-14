// import React and useState hook
import React, { useState } from 'react';
// import React and useState hook
import './App.css';
// import Profile component
import Profile from './Profile';
// import Navbar component
import Navbar from './Navbar';
// import Hobbies component
import Hobbies from './Hobbies';

 // defining App component
 function App() {
  // useState hook to manage active tab state
  const [activeTab, setActiveTab] = useState('home');

  return (
     // main container div
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Profile />
      {activeTab === 'home' && 
        <div>
          <p>Welcome to my Profile page!</p>
        </div>
      }
      {activeTab === 'about' && 
        <div>
          I am a self motivated person who loves to learn.
        </div>
      }
      {activeTab === 'hobbies' && <Hobbies />}
    </div>
  );
}
// exporting App component
export default App;
