import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useInput } from './useInput';

// you can handle form inputs with
// controlled components
// means you handle form inputs using
// state variables
function App() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle('');
    resetColor('#000');
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="Sound..." />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
