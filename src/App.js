import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <BrowserRouter>
      <SWProvider>
        <Router />
      </SWProvider>
    </BrowserRouter>
  );
}

export default App;
