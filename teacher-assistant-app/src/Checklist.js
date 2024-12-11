import React, { useState } from 'react';

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn React', checked: false },
    { id: 2, text: 'Build an App', checked: false },
    { id: 3, text: 'Deploy the App', checked: false },
  ]);

  // Toggle the checked state for an item
  const toggleItemChecked = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  // Handle text change (for spellcheck)
  const handleTextChange = (id, text) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, text: text } : item
    ));
  };

  return (
    <div className="checklist-container">
      <h2>My Checklist</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleItemChecked(item.id)}
            />
            <input
              type="text"
              value={item.text}
              onChange={(e) => handleTextChange(item.id, e.target.value)}
              spellCheck="true" // Enable spell check for text input
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
