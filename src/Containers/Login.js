import React, { Component } from 'react';
import Signup from './Signup'

class Login extends Component{
  state = {
    signUp : false,
    username: '',
    password: ''
  }

  signUpClickHandler = (e) => {
    e.preventDefault();
    this.setState({signUp: !this.state.signUp})
  }

  loginClickHandler = (e) => {
    e.preventDefault()
    this.props.loginHandler(this.state.username, this.state.password)
  }

  loginChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderLogginFrom = () => {
    return (
      <div className='login'>
        <div className='loginform'>
      <form>
      <input type='text' name='username' placeholder='username' onChange={this.loginChangeHandler} />
      <br></br>
      <input type='password' name='password' placeholder='password' onChange={this.loginChangeHandler} />
      <br/>
      <button onClick={this.loginClickHandler} className='ui blue button'>Login</button>

      </form>
      <button className='ui blue button' onClick={this.signUpClickHandler}>New user? Sign up!</button>
      </div>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.state.signUp ? <Signup createUser={this.props.createUser}/> : this.renderLogginFrom() }
      </div>
    )
  }
}

export default Login;
