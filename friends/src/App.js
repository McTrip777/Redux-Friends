import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import NavBar from './Components/NavBar';
import { Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';


class App extends Component {
  state ={

  }

render(){
  return (
      <div className="App">
      <NavBar />
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path="/friendsList" component={FriendsList} />
      </div>
    );
}
}

export default App;

