import React, { Component } from 'react';
import Friend from './Friend';
import { connect } from 'react-redux';
import { getFriends } from '../Action/Action';

class FriendsList extends Component {
componentDidMount() {
    this.props.getFriends();
  }
render() {
  return (
    <div>
      <h2>Protected stuff!</h2>
      <h2>I am the FriendList</h2>
      {this.props.isFetching ? (
          <p>Hello this is were friends hangggg out.</p>
        ) : (
      this.props.friends.map(friend =>  
      (<Friend friend={friend} key={friend.id}/>)))}
    </div>
  )
}
}
const mapStateToProps = state => {
  return{
    friends: state.friends,
    fetching: state.fetching,
  }
}

export default connect(mapStateToProps, { getFriends })(FriendsList);
