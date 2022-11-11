import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// you can handle form inputs with
// controlled components
// means you handle form inputs using
// state variables
function App() {
  const [sound, setSound] = useState('');
  const [color, setColor] = useState('#000');
  // const sound = useRef();
  // const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    // const soundVal = sound.current.value;
    // const colorVal = color.current.value;
    alert(`${sound} sounds like ${color}`);
    setSound('');
    setColor('#000');
    // sound.current.value = '';
    // color.current.value = '';
  };

  return (
    <form onSubmit={submit}>
      <input
        value={sound}
        onChange={(e) => setSound(e.target.value)}
        type="text"
        placeholder="Sound..."
      />
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
