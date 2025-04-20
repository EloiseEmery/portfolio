import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CursorGlow from './components/atoms/CursorGlow';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CursorGlow />
    <App />
  </React.StrictMode>
);

reportWebVitals();
