import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul>
      <Link to="/home">
      <li>Home</li>
      </Link>
      <Link to="/test">
        <li>test</li>
      </Link>
      <Link to="/home" onClick={props.logoutHandler}>
      <li>Logout</li>
      </Link>
    </ul>
  )
}



export default NavBar;
