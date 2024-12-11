// src/components/TextField.js
import React, { useState } from 'react';

function TextField() {
  const [inputValue, setInputValue] = useState('');  // state to hold input value

  const handleChange = (event) => {
    setInputValue(event.target.value);  // update state when input changes
  };

  return (
    <div>
      <label htmlFor="myTextField">Enter some text: </label>
      <input
        type="text"
        id="myTextField"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default TextField;  // default export
