import React from 'react';
import NavLink from 'react-router-dom';

const CategoryHome = (props) => (
  <div>
    <h1>CategoryHome - {props.match.params.categoryId}</h1>
    <button onClick={() => props.history.push('/login')}>Login</button>
  </div>
);
export default CategoryHome;