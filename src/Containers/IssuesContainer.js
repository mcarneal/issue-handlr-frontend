import React, { Component } from "react";
import Issue from '../Components/Issue'
import '../index.css'


class IssuesContainer extends Component{

  issuesArray = () => {
    return this.props.issues.map(issue => <Issue key={issue.id} {...issue}/>)
  }

  render(){
    return(
      <div className="IssuesContainer">
        <table className="ui celled inverted selectable table">
          <thead className=""><tr className="">
            <th className="">Title</th>
            <th className="">Description</th>
            <th className="">Status</th>
          </tr>
         </thead>
         {this.issuesArray()}
    </table>

      </div>

    )
  }



}

export default IssuesContainer
