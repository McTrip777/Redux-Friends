import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../Action/Action';


export class Login extends Component {
    state = {
      credentials:{
        username: '',
        password: '',
      }
    }

    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };

    login = e => {
      e.preventDefault();
      this.props.login(this.state.credentials)
      .then(() => {
        this.props.history.push('/protected');
      });
    };

  render() {
    return (
      <div>
          <h2>Log in Here!</h2>
        <form onSubmit={this.login}>
           <input 
            className='username'
            placeholder='Username'
            name="username"
            type="text"
            value={this.state.credentials.username}
            onChange={this.handleChange}

            >
                
           </input>
           <input
            className='password'
            onChange={this.handleChange}
            placeholder="Password"
            name="password"
            type="text"
            value={this.state.credentials.password}
          />
        <button>Log in</button>
        </form>
      </div>
    )
  }
}


export default connect( null, { login } )(Login);
