import React, { Component } from "react";
import Issue from '../Components/Issue'
import DetailedIssueCard from '../Components/DetailedIssueCard'
import '../index.css'


class IssuesContainer extends Component{

  state = {
    showAllIssues: true,
    incompleteAssignments: [],
    completedAssignments: [],
    chosenIssue: {}
  }

  clickHandler = (selectedIssue) => {
    this.setState({
      chosenIssue: selectedIssue
    })
  }

  issuesArray = () => {
    return this.props.issues.map(issue => <Issue key={issue.id} {...issue} clickHandler={this.clickHandler}/>)
  }

  allIssues = () => {
    return (
      <table className="ui celled inverted selectable table">
        <thead className=""><tr className="">
          <th className="">Title</th>
          <th className="">Description</th>
          <th className="">Status</th>
        </tr>
       </thead>
       {this.issuesArray()}
      </table>
    )
  }

  individualIssue = () => {
    return (
      <div className="issue">
      <h1>{this.state.chosenIssue.title}</h1>
      <h2>Description <br/>{this.state.chosenIssue.description} </h2>
      <h2>Category <br/>{this.state.chosenIssue.category} </h2>
      <h3> History </h3>
      <ul>
        {this.state.chosenIssue.assignments.map((assignment) => {
          let employeeOfAssignment = this.state.chosenIssue.employees.find((employee) => employee.id === assignment.employee_id)
          return (
            <li>
              {assignment.title}
              <br/>
              Assigned to: {employeeOfAssignment.name}
            </li>
          )
        })
      }
      </ul>
      </div>
    )
  }

  issueCard = () => {
    return (
      <div className="IssuesContainer">
        {this.state.chosenIssue.id ? this.individualIssue() : this.allIssues()}
      </div>
    )
  }

  backButtonHandler = () => {
    this.setState({
      showAllIssues: true
    })
  }

  assignmentCard = () => {
    let issueOfThisAssignment = this.props.issues.find(issue => {
      return issue.id === this.props.chosenAssignment.issue_id
    })
    return (
      <DetailedIssueCard
      issue={issueOfThisAssignment}
      backButtonHandler={this.props.backButtonHandler}
      changeStatusHandler={this.props.changeStatusHandler}
      deleteHandler={this.props.deleteHandler}/>
    )
  }



  render(){
    return this.props.isAssignmentChosen ? this.assignmentCard() : this.issueCard()
  }



}

export default IssuesContainer
