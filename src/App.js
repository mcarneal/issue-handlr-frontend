import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Containers/Login"
import Signup from "./Containers/Signup"
import IssuesContainer from "./Containers/IssuesContainer"
import MyAssignments from "./Containers/MyAssignments"
import Home from "./Containers/Home"

import { Route, Switch, withRouter, Link } from "react-router-dom"


class App extends Component {

  state= {
    // issues: [],
    // myIssues: [],
    loggedInEmployee: {}
  }
  //
  // componentDidMount() {
  //   if (this.loggedInEmployee){
  //     fetch('http://localhost:3000/api/v1/issues')
  //     .then(resp => resp.json())
  //     .then(issues => this.setState({
  //       issues: issues
  //     }))
  //
  //     fetch('http://localhost:3000/api/v1/employees/8')
  //     .then(resp => resp.json())
  //     .then(myIssues => {
  //       this.setState({myIssues: myIssues.issues})
  //     })
  //   } else {
  //     return (<h1>not logged in</h1>)
  //   }
  // }

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
      <Switch>
        <Route  path ="/home" component={Home}/>
        <Route  path="/" component={Login}/>
      </Switch>
    )
  }
}

export default App;
