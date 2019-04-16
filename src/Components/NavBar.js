import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted pointing secondary menu">
        <img className="logoImg" src="/images/logo.png" height="50" width="150"/>
        <a className="item">
          <Link to="/home">
          Home
          </Link></a>
        <a className="item" id='logout'>
          <Link to="/" onClick={props.logoutHandler}>
          LogOut
          </Link>
        </a></div>
      </div>

  )
}




export default NavBar;
