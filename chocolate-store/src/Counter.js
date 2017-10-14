import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Counter extends Component {

  static propTypes = {
    startValue: PropTypes.number.isRequired,
    changeValue: PropTypes.number.isRequired
  };

  static defaultProps = {
    startValue: 0,
    changeValue: 1
  }

  constructor(props) {
    super(props);
    //console.log(this);
    this.state = {counter: props.startValue}
  }


  componentWillMount() {
    console.log(arguments)
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log(arguments)
    console.log('componentDidMount')
  }

  componentWillReceiveProps() {
    console.log(arguments)
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(prevProps, newState) {
    console.log(this.state, newState)
    console.log('shouldComponentUpdate')
    return this.state.counter != newState.counter
  }

  componentWillUpdate() {
    console.log(arguments)
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log(arguments)
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log(arguments)
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render');
    let {changeValue} = this.props;
    return (
      <div>
        <h1 style={{padding: 50}}>{this.state.counter}</h1>
        <button style={{margin: 10}} onClick={(e) => {
          this.props.onCounterClick(this.props.id, 'Increment Clicked!!!');
          this.setState({counter: this.state.counter})
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