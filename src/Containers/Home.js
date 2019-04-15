import React, { Component } from "react";
import {Route, Switch, withRouter} from 'react-router-dom'
import IssuesContainer from "./IssuesContainer"
import MyAssignments from "./MyAssignments"
import '../App.css'

class Home extends Component {

  state = {
    issues: [],
    myAssignments: []
  }

  componentDidMount(){
    if(this.props.employee.username){
      fetch('http://localhost:3000/api/v1/issues')
      .then(resp => resp.json())
      .then(issues => this.setState({
        issues: issues
      }, () => {
        this.myAssignments()
      }))
    } else {
      this.props.history.push("/")
    }
  }

  myAssignments = () => {
    let newArr = []
    this.state.issues.forEach((issue) => {
       issue.assignments.forEach((assignment) => {
        return assignment.employee_id === this.props.employee.id ? newArr.push(assignment) : null
      })
    })
    this.setState({
      myAssignments: newArr
    })
  }

  render() {
    return (
      <div className="home">
      <MyAssignments myAssignments={this.state.myAssignments} />
      <IssuesContainer issues={this.state.issues} />
      </div>
    )
  }
}

export default withRouter(Home);
