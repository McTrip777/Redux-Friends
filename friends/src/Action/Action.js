import axios from 'axios';

export const FRIENDS_LOADING = 'FRIENDS_LOADING';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';

export const LOGIN_START = 'LOGIN_START';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
  .post('http://localhost:5000/api/login', creds)
  .then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
    getFriends();
  });
};

export const getFriends = () => dispatch => {
    dispatch({ 
      type: FRIENDS_LOADING 
    });
    axios
    .get('http://localhost:5000/api/friends', {
        headers: {Authorization: localStorage.setItem('token')}
    })
    .then(res => {
      dispatch({ type: FRIENDS_SUCCESS, 
        payload: res.data 
      });
      console.log(res.data)
    })
    .catch(err => {
      dispatch({
        type: FRIENDS_FAILURE,
        payload: err
      });
    });
};