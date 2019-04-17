import React from "react";
import IssueBar from './issuebar'

const DetailedIssueCard = (props) => {

  return (
    <div className='issue'>
      <IssueBar
      deleteHandler={props.deleteHandler}
      issue={props.issue}
      backButtonHandler={props.backButtonHandler}
      changeStatusHandler={props.changeStatusHandler}
      />
      <h1>{props.issue.title}</h1>
      <h2>Description <br/>{props.issue.description} </h2>
      <h2>Category <br/>{props.issue.category} </h2>
      <h3> History </h3>
      <ul>
        {props.issue.assignments.map((assignment) => {
          let employeeOfAssignment = props.issue.employees.find((employee) => employee.id === assignment.employee_id)
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

export default DetailedIssueCard
