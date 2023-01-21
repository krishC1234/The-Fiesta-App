import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Help from './components/pages/Help'
import List from './components/pages/List'
import Login_Register from './components/pages/Login_Register'
import NavBar from './components/Navbar/NavBar'

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/list" component={List} />
          <Route path="/login" component={Login_Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
