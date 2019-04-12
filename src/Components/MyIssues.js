import React, { Component } from 'react';

class MyIssues extends Component{
  render(){
    return(

      <div class="ui card">
      <div class="content">
      <div class="header">{this.props.title}</div>
      <div class="meta">Incomplete</div>
      <div class="description">{this.props.description}</div>
      </div>
      </div>

    )
  }
}

export default MyIssues
