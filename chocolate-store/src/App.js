import React, {Component} from 'react';

import './App.css';
import {Switch, Route, Link, NavLink, Redirect} from 'react-router-dom'
import Login from './components/Login'
import ChocolateList from './components/ChocolateList';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          id: 1,
          startValue: 100,
          changeValue: 20,
        }
      ],
      counterId: 'n/a',
      message: 'n/a'
    };
    this.getChildMessage = this.getChildMessage.bind(this)
  }

  getChildMessage(counterId, message) {
    //console.log(this)
    this.setState({counterId, message})
  }

  render() {
    let isLoggedIn = true;
    return (
      <div>
        <h1>Chocolate Store</h1>
        <nav>
          <ul>
            <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
            <li><NavLink to="/chocs">Chocs</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/chocs" render={props => isLoggedIn ? <ChocolateList {...props} categories={['New Dark', 'Old Milk']}/> : <Redirect to="/login"/>}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>


    )
  }
}

export default App;
