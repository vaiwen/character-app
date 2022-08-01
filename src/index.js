import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CharacterContextProvider } from './context/CharacterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CharacterContextProvider>
      <App />
    </CharacterContextProvider>
  </React.StrictMode>
);


