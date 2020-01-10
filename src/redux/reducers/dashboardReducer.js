import {
  SET_DASHBOARD,
  SET_NEW_DASHBOARD,
  LOADING_DASHBOARD,
  SAVE_DASHBOARD,
  CLEAR_DASHBOARD
} from '../types';

const initialState = {
  totalBudget: 0,
  totalSpent: 0,
  totalRemaining: 0,
  people: [],
  saving: false,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DASHBOARD:
      return {
        ...state,
        loading: true
      };
    case SET_NEW_DASHBOARD:
      return {
        ...state
      };
    case SET_DASHBOARD:
      return {
        ...action.payload,
        loading: false,
        saving: false
      };
    case SAVE_DASHBOARD:
      return {
        ...action.payload,
        loading: false,
        saving: true
      };
    case CLEAR_DASHBOARD:
      return {
        ...state
      };
    default:
      return state;
  }
}
