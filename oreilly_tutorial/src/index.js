import ReactDOM from 'react-dom';
import React, { createContext } from 'react';
import App from './App.js';
import ColorProvider from './color-hooks.js';

export const ColorContext = createContext();

ReactDOM.render(
  <ColorProvider>
    <App/>
  </ColorProvider>,
  document.getElementById("root")
);