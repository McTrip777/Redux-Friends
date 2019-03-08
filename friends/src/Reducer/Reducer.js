import { 
    FRIENDS_LOADING, 
    FRIENDS_SUCCESS, 
    FRIENDS_FAILURE 
  } from "../Action/Action";

const initialState = {
    friends: [],
    fetching: false,
    error: null
  };

export const friendsReducer = (state = initialState, action) => {
    switch (action.type){
        case FRIENDS_LOADING:
        return{
          ...state,
          fetching: true,
        };
      case FRIENDS_SUCCESS:
        return{
          ...state,
          fetching:false,
          friends: [...state.friends, ...action.payload]
        }
      case FRIENDS_FAILURE:
        return{
          ...state,
          error: action.payload,
          fetching:false,
        }
        default:
            return state;
    }
}
export default friendsReducer;
