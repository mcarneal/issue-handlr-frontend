import React, { Component } from "react";
import Issue from '../Components/Issue'
import DetailedIssueCard from '../Components/DetailedIssueCard'
import '../index.css'


class IssuesContainer extends Component{

  state = {
    showAllIssues: true
  }

  issuesArray = () => {
    return this.props.issues.map(issue => <Issue key={issue.id} {...issue}/>)
  }

  issueCard = () => {
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
      <DetailedIssueCard issue={issueOfThisAssignment} backButtonHandler={this.props.backButtonHandler}/>
    )
  }

  render(){
    return this.props.isAssignmentChosen ? this.assignmentCard() : this.issueCard()
  }



}

export default IssuesContainer
