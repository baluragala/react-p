import React, {Component} from 'react';

import './App.css';
import AppHeader from './Header'
import Counter from './Counter';
import Form1 from './Form1';

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

    return (

    <Form1/>
  )
  }
}

export default App;
