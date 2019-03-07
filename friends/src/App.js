import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import NavBar from './Components/NavBar';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <Route exact path='/' component={Login} />
        <Route path='/friendsList' render={FriendsList} />
      </div>
    );
  }
}

export default App;
