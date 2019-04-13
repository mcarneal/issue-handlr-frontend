import React, { Component } from "react";
import MyIssues from '../Components/MyIssues'
import '../App.css'



class MyAssignments extends Component {

  myIssues = () => {
    console.log("inside assignments render",this.props.myIssues)
    return this.props.myIssues.map(issue => <MyIssues key={issue.id} {...issue} />)
  }

  render(){
    console.log("inside assignments render",this.props.myIssues)
    return(
      <div className='My Assignments Container'>
        <div className="ui cards">
         {this.myIssues()}
       </div>
      </div>
    )
  }
}

export default MyAssignments;
