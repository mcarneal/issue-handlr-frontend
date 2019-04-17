import React, { Component } from 'react';

class MyIssues extends Component{
  render(){
    return(
      <div className="ui card" onClick={() => this.props.myAssignmentsCardClickHandler(this.props)}>
      <div className="content">
      <div className="header">{this.props.title}</div>
      <div className="meta">Incomplete</div>
      <div className="description">{this.props.description}</div>
      </div>
      </div>

    )
  }
}

export default MyIssues
