import React, { Component } from 'react';

class Issue extends Component{
  render(){
    return(
      <tbody class="">
        <tr class="">
          <td class="">{this.props.title}</td>
          <td class="">{this.props.description}</td>
          <td class="right aligned">Unassigned</td>
      </tr>
    </tbody>
    )
  }
}
export default Issue;
