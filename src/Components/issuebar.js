import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'react-popup';

const IssueBar = (props) => {
  return (
    <div className="ui menu">
    <Link className="item" onClick={props.backButtonHandler}>
      <button className="ui red button">
      Back
    </button>
    </Link>
    <Link className="item" >
      Comment
    </Link>
    <Link className="item" onClick={()=> props.contactClickHandler(props)}>
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
