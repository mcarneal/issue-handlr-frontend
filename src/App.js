import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Containers/Login"
import Signup from "./Containers/Signup"
import IssuesContainer from "./Containers/IssuesContainer"
import MyAssignments from "./Containers/MyAssignments"
import Home from "./Containers/Home"
import NavBar from "./Components/NavBar"

import { Route, Switch, withRouter, Link } from "react-router-dom"


class App extends Component {

  state= {
    issues: [],
    myIssues: [],
    employee: {
      username: '',
      id: null
    }
  }

  componentDidMount() {
    let token = localStorage.getItem("token")
    fetch('http://localhost:3000/api/v1/get_employee',{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        accepts: "application/json",
        authorization: `${token}`
      }
    })
    .then(res => res.json())
    .then(data =>{
        this.setState({
          employee: {
            ...this.state.employee,
            username: data.username,
            id: data.id
          }
        })
    })
  }

  createUser = (form) => {

    fetch('http://localhost:3000/api/v1/employees',{
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
      .then(data => {
        this.setState({
          employee: {
            ...this.state.employee,
            username: data.username,
            id: data.id
          }
        })
        localStorage.setItem("token", data.token)
      })
  }

  logoutHandler = () => {
    localStorage.removeItem("token")
    this.setState({
      employee: {
        ...this.state.employee,
        username: '',
        id: null
      }
    })
  }

  loginHandler = (username, password) => {
    fetch('http://localhost:3000/api/v1/login',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        employee: {
          password: password,
          username: username
        }
      })
    }).then(res => res.json())
      .then(data => {
        this.setState({
          employee: {
            ...this.state.employee,
            username: data.username,
            id: data.id
          }
        })
        localStorage.setItem("token", data.token)
        this.props.history.push('/home')
      })
}



  render() {
    return(
      <div>
      <NavBar logoutHandler={this.logoutHandler}/>
      <Switch>
        <Route  path ="/home" render={()=> <Home employee={this.state.employee}/ >}/>

        <Route  path="/" render={()=> <Login loginHandler={this.loginHandler} createUser={this.createUser}/>}/>


      </Switch>

      </div>
    )
  }
}

export default withRouter(App);
