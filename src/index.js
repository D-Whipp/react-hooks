import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [status, setStatus] = useState('not listening');
  return (
    <div>
      <h1>I'm {status}.</h1>
      <button onClick={() => setStatus('listening')}>listen</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
