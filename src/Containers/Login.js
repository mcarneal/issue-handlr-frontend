import React, { Component } from 'react';
import Signup from './Signup'

class Login extends Component{
  state = {
    signUp : false
  }

  signUpClickHandler = (e) => {
    e.preventDefault();
    this.setState({signUp: !this.state.signUp})
  }

  renderLogginFrom = () => {
    return (
      <div>
      <form>
      <input type='text' name='username' placeholder='username' />
      <br></br>
      <input type='password' name='password' placeholder='password' />
      <br/>
      <button className='ui blue button'>Login</button>

      </form>
      <button onClick={this.signUpClickHandler}>New user? Sign up!</button>
      </div>
    )
  }

  render(){
    console.log(this.state.signUp)
    return(
      <div>
        {this.state.signUp ? <Signup /> : this.renderLogginFrom() }
      </div>
    )
  }
}

export default Login;
