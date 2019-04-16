import React from 'react';
import { Link } from 'react-router-dom';

const IssueBar = (props) => {
  return (
    <div class="ui menu">
    <div class="header item">
      More Options
    </div>
    <a class="item">
      Comment
    </a>
    <a class="item">
      Contact
    </a>
    <a class="item">
      Change Status
    </a>
    <a class="item">
      Add Assignment
    </a>
    <a class="item">
      Cancel Ticket
    </a>
  </div>

  )
}

export default IssueBar;
