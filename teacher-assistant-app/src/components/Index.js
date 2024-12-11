// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18
import './index.css';  // If you have global styles (this file is optional)
import App from '../App';  // Importing your App component
import reportWebVitals from './reportWebVitals';  // Optional: For performance monitoring

// Create the root element using createRoot() - React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />  {/* Render your main App component */}
  </React.StrictMode>
);

// Optional: For performance monitoring (e.g., to log web vitals to an analytics endpoint)
reportWebVitals();
