import React, { Component } from 'react';
// import { connect } from 'react-redux';

export class Login extends Component {
    state = {
      credentials:{
        username: '',
        password: '',
      }
    }

  render() {
    return (
      <div>
          <h2>Log in Here!</h2>
        <form>
           <input 
            className='username'
            placeholder='Username'
            text='username'
            name="password"
            type="text"
            >
                
           </input>
           <input
            className='password'
            // onChange={}
            placeholder="Password"
            // value={}
            name="password"
            type="text"
          />
        <button>Log in</button>
        </form>
      </div>
    )
  }
}


export default Login;

