import React, { Component } from "react";
import { withRouter} from 'react-router-dom'
import IssuesContainer from "./IssuesContainer"
import MyAssignments from "./MyAssignments"
import '../App.css'

class Home extends Component {

  state = {
    issues: [],
    myAssignments: [],
    chosenAssignment: {},
    isAssignmentChosen: false,
    statusChanged: false
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
      this.props.history.push("/login")
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log('log from update previus state', prevState.statusChanged)
    console.log('log from current state', this.state.statusChanged)

    if(prevState.statusChanged !== this.state.statusChanged){
      fetch('http://localhost:3000/api/v1/issues')
      .then(res => res.json())
      .then(issues => this.setState({issues: issues}),
      ()=> this.myAssignments())
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

  myAssignmentsCardClickHandler = (chosenCard) => {
    this.setState({
      chosenAssignment: chosenCard,
      isAssignmentChosen: true
    })
  }

  backButtonHandler = () => {
    this.setState({
      isAssignmentChosen: false
    })
  }

  deleteHandler = (issue) => {
    fetch(`http://localhost:3000/api/v1/issues/${parseInt(issue.id)}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(issue => {

        let newIssues = this.state.issues.filter(issueObj => {
          return issue.id !== issueObj.id

        })
        this.setState({
          issues: newIssues,
          isAssignmentChosen: false
        },
          ()=>{this.myAssignments()}
        )
      })
  }

  changeStatusHandler=() => {
    console.log(this.state.chosenAssignment);
    fetch(`http://localhost:3000/api/v1/assignments/${this.state.chosenAssignment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        completed: !this.state.chosenAssignment.completed
      })
    })
    .then(res => res.json())
    .then(assignment => {
      this.setState({statusChanged: !this.state.statusChanged})
    })
  }


  render() {
    return (
      <div className="home">
      <MyAssignments
        myAssignments={this.state.myAssignments}
        myAssignmentsCardClickHandler={chosenCard => this.myAssignmentsCardClickHandler(chosenCard)}
      />
      <IssuesContainer
        deleteHandler={this.deleteHandler}
        issues={this.state.issues}
        chosenAssignment={this.state.chosenAssignment}
        isAssignmentChosen={this.state.isAssignmentChosen}
        backButtonHandler={this.backButtonHandler}
        changeStatusHandler={this.changeStatusHandler}
        />
      </div>
    )
  }
}

export default withRouter(Home);
