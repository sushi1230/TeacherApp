import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [checklist, setChecklist] = useState(['']);
  const [textInput, setTextInput] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addChecklistItem = () => {
    setChecklist([...checklist, '']);
  };

  const handleChecklistChange = (index, value) => {
    const newChecklist = [...checklist];
    newChecklist[index] = value;
    setChecklist(newChecklist);
  };

  return (
    <div className="app-container" style={{ backgroundColor: '#ffc0cb' }}>
      {isSidebarOpen && (
        <div className="sidebar">
          {[1, 2, 3, 5, 6, 7].map((num) => (
            <button key={num} className="sidebar-button">
              {num}
            </button>
          ))}
        </div>
      )}
      <div className="main-content">
        <button className="open-close" onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close' : 'Open'}
        </button>
        <div className="header">Header</div>
        <div className="buttons">
          {[...Array(4)].map((_, index) => (
            <button key={index} className="circle-button">
              •
            </button>
          ))}
        </div>
        <div className="text-field">
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Enter text here"
          />
          <input
            type="text"
            placeholder="Another text field"
          />
        </div>
        <div className="checklist-container">
          <div className="checklist-header">Checklist</div>
          {checklist.map((item, index) => (
            <input
              key={index}
              type="text"
              value={item}
              onChange={(e) => handleChecklistChange(index, e.target.value)}
            />
          ))}
          <button onClick={addChecklistItem} className="add-more">
            Add more to do
          </button>
        </div>
        <div className="footer">Footer</div>
      </div>
    </div>
  );
}

export default App;
