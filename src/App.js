import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Help from './components/pages/Help'
import List from './components/pages/List'
import Login from './components/pages/Login'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/list" component={List} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
