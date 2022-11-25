import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './Routes';

function App() {
  console.log('App rendered')
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
