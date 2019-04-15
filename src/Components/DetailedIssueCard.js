import React from "react";

const DetailedIssueCard = (props) => {
  return (
    <div>
      <h1>{props.issue.title}</h1>
      <h2>Description <br/>{props.issue.description} </h2>
      <h2>Category <br/>{props.issue.category} </h2>
      <h3> History </h3>
      <ul>
        {props.issue.assignments.map((assignment) => {
          return (
            <li>
              {assignment.title}
            </li>
          )
        })
      }
      </ul>
      <button onClick={props.backButtonHandler}>Back</button>
    </div>
  )
}

export default DetailedIssueCard
