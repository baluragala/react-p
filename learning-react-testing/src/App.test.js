import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({adapter: new Adapter()});

describe('AppComponent', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });

    it('should have a header', () => {
        const component = shallow(<App/>);
        const header = component.find('header');
        expect(header.length).toEqual(1);
    });

    it('should have a <p> with text "Hello React"', () => {
        const component = shallow(<App/>);
        const p = component.find('p');
        //console.log(p.text())
        expect(p.text()).toEqual('Hello React16')
    });

    it('snapshot testing', () => {
        const tree = shallow(<App/>);
        expect(tree).toMatchSnapshot();
    })

});

