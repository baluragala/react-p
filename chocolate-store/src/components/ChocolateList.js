import React from 'react';
import {NavLink, Switch,Route} from 'react-router-dom';
import CategoryHome from './CategoryHome';

let categories = [
  'Dark', 'White', 'Raw', 'Other'
];

const ChocolateList = (props) => {
    console.log(props);
    return (
      <div>
        <h1>ChocolateList</h1>
        <ul>
          {
            props.categories.map(c => <li><NavLink to={`${props.match.url}/${c}`}>{c}</NavLink></li>)
          }
        </ul>
        <Switch>
          <Route path={`${props.match.url}/:categoryId`} component={CategoryHome}/>
        </Switch>
      </div>


    )
  }
;
export default ChocolateList;