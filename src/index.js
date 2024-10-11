import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/tailwind.css';
import './components/themes.scss';
import './components/styles.scss';
import App from './App';

import {
  BrowserRouter as Router,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
