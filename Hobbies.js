// importing React and useState hook
import React, { useState } from 'react';
// defining Hobbies component
function Hobbies() {
    // state for expanded state  
  const [expanded, setExpanded] = useState(false);
  //function to toggle expanded state
  const toggleExpanded = () => {
    // toggle expanded state
    setExpanded(!expanded);
  };
  // returning JSX
  return (
    <div>
      <h2 onClick={toggleExpanded}>Click here to learn about my Hobbies</h2>
      {expanded && (
        <ul>
          <li>Swimming</li>
          <li>Hiking</li>
          <li>Reading</li>
          <li>Watching movies</li>
          <li>Computers</li>
          <li>Cars</li>
        </ul>
      )}
    </div>
  );
}
// exporting Hobbies component
export default Hobbies;
