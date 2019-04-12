import React, { Component } from 'react';

class Issue extends Component{

  state = {
    assignments: this.props.assignments
  }

  assignmentArray = () => {
    return this.state.assignments.map((assignment) => {
      return <option>{assignment.title} - {assignment.employee_id}</option>
    })
  }

  issueAssignmentChangeHandler = (e) => {
    return /\d/.test(e.target.value) ? null : this.props.selectIssueAssignmentHandler(this.props.issue)
  }

  render(){
    return(
      <div className='Issue Card'>
        <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <h3> {this.props.category} </h3>
          <select onChange={this.issueAssignmentChangeHandler}>
            {this.assignmentArray()}
          </select>
      </div>
    )
  }
}
export default Issue;
