import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'


class Signup extends Component{
  state = {
    name: '',
    role: '',
    username: '',
    password: ''
  }

  signupChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.createUser(this.state)
    this.setState({
      name: '',
      role: '',
      username: '',
      password: ''
    })
  }



  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <input type='text' name='name' placeholder='Name' onChange={this.signupChangeHandler} value={this.state.name}/>
        <br/>
        <input type='text' name='role' placeholder='Role' onChange={this.signupChangeHandler}
        value={this.state.role}/>
        <br/>
        <input type='text' name='username' placeholder='username' onChange={this.signupChangeHandler}
        value={this.state.username}/>
        <br/>
        <input type='password' name='password' placeholder='password' onChange={this.signupChangeHandler}
        value={this.state.password}/>
        <br/>
        <button className='ui blue button'>Signup</button>
      </form>
    )
  }
}

export default withRouter(Signup);
