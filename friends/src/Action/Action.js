import axios from 'axios';

export const FRIENDS_LOADING = 'FRIENDS_LOADING';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({ 
      type: FRIENDS_LOADING 
    });
    axios
    .get('https://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FRIENDS_SUCCESS, 
        payload: res.data 
      });
    })
    .catch(err => {
      dispatch({
        type: FRIENDS_FAILURE,
        payload: err
      });
    });
};