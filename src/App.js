import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Component/Home/Home';

function App() {
  return (
    <Router>
      <Home/>
    <Switch>
          
          <Route path="/home">
            <Home />
          </Route>
          
            
        </Switch>
      
    </Router>
  );
}

export default App;
