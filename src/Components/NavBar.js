import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted pointing secondary menu">
        <a className="item">
          <Link to="/home">
          Home
          </Link></a>
        <a className="item">
          <Link to="/" onClick={props.logoutHandler}>
            <button onClick={(e)=> e.preventDefault()} className="ui blue button">LogOut</button>
          </Link>
        </a></div>
      </div>

  )
}




export default NavBar;
