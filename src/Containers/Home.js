import React, { Component } from "react";
import IssuesContainer from "./IssuesContainer"
import MyAssignments from "./MyAssignments"
import '../App.css'

class Home extends Component {
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
    fetch('http://localhost:3000/api/v1/employees/8')
    .then(resp => resp.json())
    .then(myIssues => {
      this.setState({myIssues: myIssues.issues})
    })
  }

  render() {
    console.log('state issues', this.state.myIssues)
    return (
      <div className="Home">
      <MyAssignments myIssues={this.state.myIssues}/>
      <IssuesContainer issues={this.state.issues} />
      </div>
    )
  }
}

export default Home;
