import React from 'react';
import { Link } from 'react-router-dom';

const IssueBar = (props) => {
  return (
    <div class="ui menu">
    <Link className="item" onClick={props.backButtonHandler}>
      Back
    </Link>
    <Link className="item">
      Comment
    </Link>
    <Link className="item">
      Contact
    </Link>
    <Link className="item" onClick={props.changeStatusHandler}>
      Change Status
    </Link>
    <Link className="item">
      Add Assignment
    </Link>
    <Link className="item" onClick={()=> props.deleteHandler(props.issue)}>
      Cancel Ticket
    </Link>
  </div>

  )
}

export default IssueBar;
