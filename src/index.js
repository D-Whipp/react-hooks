import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"

export const TreesContext = createContext();

const trees = [
{id: "1", type: "Maple"},
{id: "2", type: "Spruce"},
{id: "3", type: "Willow"},
{id: "4", type: "Whipple"},
]

// you can handle form inputs with
// controlled components
// means you handle form inputs using
// state variables


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{trees}}>
  <App />
  </TreesContext.Provider>
);

