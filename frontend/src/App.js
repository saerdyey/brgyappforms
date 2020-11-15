import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import History from './components/ourbarangay/History'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
            <Nav/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/history" exact component={History}/>
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
