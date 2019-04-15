import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div class="ui inverted segment">
      <div class="ui inverted pointing secondary menu">
        <a class="item">
          <Link to="/home">
          Home
          </Link></a>
        <a class="item">
          <Link to="/" onClick={props.logoutHandler}>
            <button onClick={(e)=> e.preventDefault()} className="ui blue button">LogOut</button>
          </Link>
        </a></div>
      </div>

  )
}




export default NavBar;
