import React, { Component } from "react";
import MyIssues from '../Components/MyIssues'
import '../App.css'



class MyAssignments extends Component {


  myAssignments = () => {
    return this.props.myAssignments.map(issue => <MyIssues key={issue.id} {...issue} myAssignmentsCardClickHandler={this.props.myAssignmentsCardClickHandler}/>)
  }

  render(){
    return(
      <div className='My Assignments Container'>
        <div className="ui cards">
         {this.myAssignments()}
       </div>
      </div>
    )
  }
}

export default MyAssignments;
