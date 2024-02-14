// importing React library
import React from 'react'; 
// importing CSS file
import './App.css'; 

// Navbar component
function Navbar({ activeTab, setActiveTab }) { 
  return (
    <nav className="navbar">
      <ul>
        <li 
          // conditional class based on active tab  
          className={activeTab === 'home' ? 'active' : ''} 
          // onClick event to set active tab to 'home'
          onClick={() => setActiveTab('home')} 
        >
          Home
        </li>
        <li 
          // conditional class based on active tab  
          className={activeTab === 'about' ? 'active' : ''} 
          // onClick event to set active tab to 'about'
          onClick={() => setActiveTab('about')} 
        >
          About
        </li>
        <li 
          // conditional class based on active tab  
          className={activeTab === 'hobbies' ? 'active' : ''} 
          // onClick event to set active tab to 'hobbies'  
          onClick={() => setActiveTab('hobbies')} 
        >
          Hobbies
        </li>
      </ul>
    </nav>
  );
}
// exporting Navbar component
export default Navbar; 
