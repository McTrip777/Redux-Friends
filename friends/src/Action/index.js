import axios from 'axios';

export const FRIENDS_LOADING = 'CHARS_FETCHING';
export const FRIENDS_SUCCESS = 'CHARS_SUCCESS';
export const FRIENDS_FAILURE = 'CHARS_FAILURE';

export const getChars = () => dispatch => {
    dispatch({ 
      type: FRIENDS_LOADING 
    });
    axios
    .get('https://swapi.co/api/people/')
    .then(({ data }) => {
      dispatch({ type: FRIENDS_SUCCESS, 
        payload: data.results 
      });
    })
    .catch(err => {
      dispatch({
        type: FRIENDS_FAILURE,
        payload: err
      });
    });
};