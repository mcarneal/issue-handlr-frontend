import React, { Component } from "react";
import IssuesContainer from "./IssuesContainer"
import MyAssignments from "./MyAssignments"
import '../App.css'

class MainContainer extends Component {
  state = {
    issues: [],
    myIssues: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/issues')
    .then(resp => resp.json())
    .then(issues => this.setState({
      issues: issues
    }))
    fetch('http://localhost:3000/api/v1/employees/9')
    .then(resp => resp.json())
    .then(myIssues => {
      this.setState({myIssues: myIssues.issues})
    })
  }

  render() {
    return (
      <div className="MainContainer">
      <MyAssignments myIssues={this.state.myIssues}/>
      <IssuesContainer issues={this.state.issues} />

      </div>
    )
  }
}

export default MainContainer;
