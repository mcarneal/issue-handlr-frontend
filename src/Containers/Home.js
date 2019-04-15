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
    console.log(this.props.employee)

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


    return (
      <div className="Home">
      <IssuesContainer issues={this.state.issues} />
      </div>
    )
  }
}

export default withRouter(Home);
