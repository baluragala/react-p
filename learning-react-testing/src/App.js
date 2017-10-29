import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Hello React16
                </p>
            </div>
        );
    }
}

export default App;
