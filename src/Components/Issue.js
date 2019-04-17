import React, { Component } from 'react';

class Issue extends Component{
  render(){
      console.log('assignments',this.props.assignments);
    //   let completedAssignments = this.props.assignments.length > 0 ?  this.props.assignments.filter((assignment) => {
    //   return assignment.completed === true
    // }).length : 0

    // let status = completedAssignments * 100 /this.props.assignments.length

    let completedAssignments = this.props.assignments.filter(assignment =>{
      return assignment.completed === true
    })

    return(
      <tbody className="">
        <tr className="">
          <td className="">{this.props.title}</td>
          <td className="">{this.props.description}</td>
          <td className="right aligned">{completedAssignments.length}%</td>
      </tr>
    </tbody>
    )
  }
}
export default Issue;
