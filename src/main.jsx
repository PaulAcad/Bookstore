// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Ensure your project is using React 18+
import App from './App.jsx';
import './App.css';  // Ensure this CSS file exists and is correctly linked

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
