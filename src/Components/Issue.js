import React, { Component } from 'react';

class Issue extends Component{
  render(){
      let completedAssignments = this.props.assignments.length > 0 ?  this.props.assignments.filter((assignment) => {
      return assignment.completed === true
    }).length : 0

    let checkStatus = completedAssignments * 100 /this.props.assignments.length
    let status = checkStatus >= 0 ? checkStatus : 0

    return(
      <tbody className="" onClick={() => this.props.clickHandler(this.props)}>
        <tr className="">
          <td className="">{this.props.title}</td>
          <td className="">{this.props.description}</td>
          <td className="right aligned">{status}%</td>
      </tr>
    </tbody>
    )
  }
}
export default Issue;
