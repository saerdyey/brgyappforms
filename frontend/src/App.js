import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import History from './components/ourbarangay/History'
import Maps from './components/ourbarangay/Maps'
import Forms from './components/ourbarangay/Forms'
import Contact from './components/ourbarangay/Contact'
import GeneralInfo from './components/ourbarangay/GeneralInfo'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
            <Nav/>
            <Switch>
              <Route path="/brgyappforms" exact component={Home}/>
              <Route path="/brgyappforms/general-info" exact component={GeneralInfo}/>
              <Route path="/brgyappforms/history" exact component={History}/>
              <Route path="/brgyappforms/maps" exact component={Maps}/>
              <Route path="/brgyappforms/forms" exact component={Forms}/>
              <Route path="/brgyappforms/contact" exact component={Contact}/>
            </Switch>
        </div>
        <Footer/>
      </Router>
      
    )
  }
}

export default App;
