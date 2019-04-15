import React, { Component } from "react";
import {Route, Switch, withRouter} from 'react-router-dom'
import IssuesContainer from "./IssuesContainer"
import MyAssignments from "./MyAssignments"
import '../App.css'

class Home extends Component {

  state = {
    issues: []
  }

  componentDidMount(){
    if(this.props.employee){
      fetch('http://localhost:3000/api/v1/issues')
      .then(resp => resp.json())
      .then(issues => this.setState({
        issues: issues
      }))
    } else{
      this.props.history.push("/")
    }
    }

  render() {
    console.log(this.state.issues)

    return (
      <div className="home">
      <IssuesContainer issues={this.state.issues} />
      </div>
    )
  }
}

export default withRouter(Home);
