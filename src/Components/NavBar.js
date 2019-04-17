import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted pointing secondary menu">
        <img alt="logo" className="logoImg" src="/images/logo.png" height="50" width="150"/>
          <Link to="/home" className="item">
          Home
          </Link>
          <Link to="/login" onClick={props.logoutHandler} className="item" id='logout'>
          LogOut
          </Link>
        </div>
      </div>

  )
}




export default NavBar;
