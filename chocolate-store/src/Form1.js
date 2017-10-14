import React, {Component} from 'react';

class Form1 extends Component {

  constructor(props) {
    super(props);
    this.state = {name: 'Zeo'}
    this.ageElement = null;
  }

  componentWillMount(){
    console.log('componentWillMount');
    console.log(this.ageElement)
  }

  submit(event) {
    console.log(this.state);
    console.log(this.ageElement.value);
    event.preventDefault();
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.ageElement)
  }

  render() {
    console.log('render');
    return (
      <form onSubmit={(e) => this.submit(e)}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name}
                 onChange={(e) => this.setState({name: e.target.value})}/>
        </label>

        <label>
          Age:
          <input type="number" name="age"
                 ref={el => {
                   console.log(el);
                   this.ageElement = el
                 }}
          />
        </label>

        <input type="submit" value="Submit"/>
      </form>)
  }

}

export default Form1;