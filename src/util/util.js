import jwtDecode from 'jwt-decode';
import axios from 'axios';

//Redux imports

import store from '../redux/store';
import { SET_AUTHENTICATED, SET_FIRST_LOGIN } from '../redux/types';
import { logoutUser } from '../redux/actions/userActions';
import { getDashboard } from '../redux/actions/dashboardActions';

//FORMATING INPUT NUMBERS
export const formatInput = number => {
  const formatted = parseFloat(number.toString().replace(/,/g, '')).toFixed(2);
  return formatted;
};

//FUNCTIONS RUN ON APP.JS
export const tokenAndFirstLogin = () => {
  const token = localStorage.IDToken;
  const firstLogin = localStorage.firstLogin;

  if (token) {
    const decodeToken = jwtDecode(token);
    if (decodeToken.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser());
      window.location.href = '/login';
    }
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = `${token}`;
    store.dispatch(getDashboard());
  }

  if (firstLogin === true) {
    store.dispatch({ type: SET_FIRST_LOGIN });
  }
};

//GET TOTALS
export const getTotals = dashboard => {
  let totals = { totalSpent: 0, totalRemaining: 0 };

  if (dashboard.people.length === 0) {
    totals.totalRemaining = dashboard.totalBudget;
    return totals;
  } else {
    for (let i = 0; i < dashboard.people.length; i++) {
      let items = dashboard.people[i].items;
      for (let j = 0; j < items.length; j++) {
        totals.totalSpent += dashboard.people[i].items[j].itemCost;
      }
    }
  }

  totals.totalRemaining = dashboard.totalBudget - totals.totalSpent;

  return totals;
};

// GET TOTALS IN CARDS FOR INDIVIDUAL PPL
export const getPeopleTotals = person => {
  let budget = person.budget;
  let totals = {
    spent: 0,
    remaining: 0
  };

  if (person.items.length === 0) {
    return totals;
  } else {
    for (let i = 0; i < person.items.length; i++) {
      totals.spent += person.items[i].itemCost;
    }
  }

  totals.remaining = budget - totals.spent;

  return totals;
};
