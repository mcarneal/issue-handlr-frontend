import React, { Component } from "react";
import Issue from '../Components/Issue'
import DetailedIssueCard from '../Components/DetailedIssueCard'
import '../index.css'
import IssueNavBar from '../Components/IssueNavBar'

class IssuesContainer extends Component{

  state = {
    showAllIssues: true,
    incompleteAssignments: [],
    completedAssignments: [],
  }

  clickHandler = (selectedIssue) => {
    this.props.individualIssueClickHandler(selectedIssue)
  }

  issuesArray = () => {
    return this.props.issues.map(issue => <Issue key={issue.id} {...issue} clickHandler={this.clickHandler}/>)
  }

  allIssues = () => {
    return (
      <div className="IssuesContainer">
        <table className="ui celled inverted selectable table">
          <thead className=""><tr className="">
            <th className="">Title</th>
            <th className="">Description</th>
            <th className="">Status</th>
          </tr>
         </thead>
         {this.issuesArray()}
        </table>
      </div>
    )
  }

  individualIssue = () => {
    return (
      <div className="issue">
        <IssueNavBar backButtonHandler={this.props.backButtonHandler}/>
      <h1>{this.props.chosenIssue.title}</h1>
      <h2>Description <br/>{this.props.chosenIssue.description} </h2>
      <h2>Category <br/>{this.props.chosenIssue.category} </h2>
      <h3> History </h3>
      <ul>
        {this.props.chosenIssue.assignments.map((assignment) => {
          let employeeOfAssignment = this.props.chosenIssue.employees.find((employee) => employee.id === assignment.employee_id)
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
      this.props.isIssueChosen ? this.individualIssue() : this.allIssues()
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
