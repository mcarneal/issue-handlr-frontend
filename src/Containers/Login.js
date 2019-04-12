import React, { Component } from 'react';

class Login extends Component{

  render(){
    return(
      <form>
        <input type='text' name='username' placeholder='username' />
        <br></br>
        <input type='password' name='password' placeholder='password' />
        <br/>
        <button className='ui blue button'>Login</button>

      </form>
    )
  }
}

export default Login;
