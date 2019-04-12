import React, { Component } from 'react';

class Login extends Component{


  componentDidMount(){
    fetch('http://localhost:3000/api/v1/signup',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: 'Miguel',
        employeeNo: 2100,
        role: 'Senior Developer',
        password: 'abc',
        username: 'coco'
      })
    }).then(res => res.json())
      .then(console.log)
  }

  render(){
    return(
      <form>
        <input type='text' name='username' placeholder='username' />
        <br></br>
        <input type='password' name='password' placeholder='password' />
        <br/>
        <button className='ui blue button'>Login</button>

      </form>
    )
  }
}

export default Login;
