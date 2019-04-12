import React, { Component } from "react";
import Issue from '../Components/Issue'
import '../index.css'




class IssuesContainer extends Component{

  issuesArray = () => {
    return this.props.issues.map(issue => <Issue key={issue.id} {...issue}/>)
  }

  render(){
    console.log(this.props.issues)
    return(
      <div className="IssuesContainer">
      <h2>Issues Container</h2>
        <table class="ui celled inverted selectable table">
          <thead class=""><tr class="">
            <th class="">Title</th>
            <th class="">Description</th>
            <th class="">Status</th>
          </tr>
         </thead>
         {this.issuesArray()}
    </table>

      </div>

    )
  }



}

export default IssuesContainer
