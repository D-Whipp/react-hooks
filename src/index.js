import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const TreesContext = createContext();

export const useTrees = () => useContext(TreesContext);

const trees = [
  { id: '1', type: 'Maple' },
  { id: '2', type: 'Spruce' },
  { id: '3', type: 'Willow' },
  { id: '4', type: 'Whipple' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);
