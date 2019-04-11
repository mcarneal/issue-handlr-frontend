import React, { Component } from "react";
import Issue from '../Components/Issue'



class IssuesContainer extends Component{

  issuesArray = () => {
    return this.props.issues.map(issue => <Issue key={issue.id} {...issue}/>)
  }

  render(){
    console.log(this.props.issues)
    return(
      <div>
      <h2>Issues Container</h2>
        {this.issuesArray()}
      </div>
    )
  }



}

export default IssuesContainer
