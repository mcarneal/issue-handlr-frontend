import React, { Component } from "react";
import IssuesContainer from "./IssuesContainer"
import MyAssignments from "./MyAssignments"

class MainContainer extends Component {
  state = {
    issues: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/issues')
    .then(resp => resp.json())
    .then(issues => this.setState({
      issues: issues
    }))
  }

  findMyAssignments = (myId) => {
    this.state.issues.employees.map()
  }

  render() {
    return (
      <div>
      <h1>Main Container </h1>
      <IssuesContainer issues={this.state.issues} />

      </div>
    )
  }
}

export default MainContainer;
