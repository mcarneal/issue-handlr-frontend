import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from "./Containers/MainContainer"
import Login from "./Containers/Login"
import Signup from "./Containers/Signup"


class App extends Component {

  state= {
    loggedInEmployee: {}
  }

  signupSubmitHandler = (form) => {
    console.log(form.password);
    debugger;
    fetch('http://localhost:3000/api/v1/signup',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        employee: {
          name: form.name,
          role: form.role,
          password: form.password,
          username: form.username
        }
      })
    }).then(res => res.json())
      .then(loggedInEmployee =>{
        this.setState({loggedInEmployee})
      })
  }
  render() {
    console.log("logging from rendder",this.state.loggedInEmployee)
    return(
      <div>
        <Login />
        <Signup signupSubmitHandler={this.signupSubmitHandler}/>
      </div>
    )
  }
}

export default App;
