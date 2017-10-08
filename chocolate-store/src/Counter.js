import React, {Component} from 'react'

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {counter: props.startValue}
  }

  render() {
    let {changeValue} = this.props;
    return (
      <div>
        <h1 style={{padding: 50}}>{this.state.counter}</h1>
        <button style={{margin: 10}} onClick={() => {
          this.setState({counter: this.state.counter + changeValue})
        }}>INC
        </button>
        <button style={{margin: 10}} onClick={() => {
          this.setState({counter: this.state.counter - changeValue})
        }}>DEC
        </button>
      </div>
    )
  }
}

export default Counter;