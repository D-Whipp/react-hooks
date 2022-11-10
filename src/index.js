import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [name, setName] = useState('Nic');
  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });
  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName('Nicci')}>Change Winner</button>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
