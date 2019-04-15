import React, { Component } from "react";
import MyIssues from '../Components/MyIssues'
import '../App.css'



class MyAssignments extends Component {

  myAssignments = () => {
    console.log("inside assignments render",this.props.myAssignments)
    return this.props.myAssignments.map(issue => <MyIssues key={issue.id} {...issue} />)
  }

  render(){
    console.log("inside assignments render",this.props.myAssignments)
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
