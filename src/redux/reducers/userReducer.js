import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_FIRST_LOGIN, UNSET_FIRST_LOGIN } from '../types';

const initialState = {
  authenticated: false,
  firstLogin: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FIRST_LOGIN:
      return {
        ...state,
        firstLogin: true
      };
    case UNSET_FIRST_LOGIN:
      return {
        ...state,
        firstLogin: false
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    default:
      return state;
  }
}
