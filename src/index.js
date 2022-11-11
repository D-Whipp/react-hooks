import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const initialState = {
  message: "I'm listening",
};

function reducer(state, action) {
  switch (action.type) {
    case 'yell':
      return {
        message: `NILES!! ${state.message}`,
      };
    case 'whisper':
      return {
        message: `Ros... ${state.message}`,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: 'yell' })}>YELL</button>
      <button onClick={() => dispatch({ type: 'whisper' })}>
        whisper
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
