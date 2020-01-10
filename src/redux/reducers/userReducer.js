import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types';

const initialState = {
  username: '',
  authenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        username: localStorage.username,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    default:
      return state;
  }
}
