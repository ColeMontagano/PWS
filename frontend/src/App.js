import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import {Home, About, WorkingSpaces, Navbar } from './components/index.js'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/pws' component={WorkingSpaces} />
        </Switch>
    </div>
  );
}

export default App;
