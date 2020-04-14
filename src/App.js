import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Dashboard from './Components/Dashboard.js';
import Cards from './Components/Cards.js'
function App() {
  return (
    <div className="App mx-auto">
    <BrowserRouter>
      <Route exact path="/" >
      <Dashboard />
      </Route>
      <Route exact path="/firstcard">
      <Cards />
      </Route>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
