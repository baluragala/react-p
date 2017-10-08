import React, {Component} from 'react';

import './App.css';
import AppHeader from './Header'
import Counter from './Counter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          startValue: 100,
          changeValue: 20,
        },
        {
          startValue: 0,
          changeValue: 5,
        },
        {
          startValue: 50,
          changeValue: 150,
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.counters.map(c => <Counter startValue={c.startValue} changeValue={c.changeValue}/>)}
      </div>
    )
  }
}

export default App;
