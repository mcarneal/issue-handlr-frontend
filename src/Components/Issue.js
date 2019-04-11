import React, { Component } from 'react';

class Issue extends Component{
  render(){
    return(
      <div className='Issue Card'>
        <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
      </div>
    )
  }
}
export default Issue;
