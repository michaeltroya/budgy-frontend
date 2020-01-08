import { SET_DASHBOARD, LOADING_DASHBOARD, SAVE_DASHBOARD } from '../types';

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
    default:
      return state;
  }
}
