import React, { Component } from 'react'

export class Login extends Component {
    state = {
        userName: '',
        password: '',
    }


  render() {
    return (
      <div>
          <h2>Log in Here!</h2>
        <form>
           <input 
            className='userName'
            placeholder='Username'
            text='userName'
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

export default Login

