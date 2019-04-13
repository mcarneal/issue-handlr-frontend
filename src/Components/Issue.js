import React, { Component } from 'react';

class Issue extends Component{
  render(){
    return(
      <tbody className="">
        <tr className="">
          <td className="">{this.props.title}</td>
          <td className="">{this.props.description}</td>
          <td className="right aligned">Unassigned</td>
      </tr>
    </tbody>
    )
  }
}
export default Issue;
