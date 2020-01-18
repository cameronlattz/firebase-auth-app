import { AsyncStorage } from 'react-native';

import * as actionType from './actionTypes';

const initialState = { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
  function loggedIn() {
    const { user } = action;

    // Save token and data to Asyncstorage
    AsyncStorage.multiSet([['user', JSON.stringify(user)]]);

    return { ...state, isLoggedIn: true, user };
  }
  function loggedOut() {
    const keys = ['user'];
    AsyncStorage.multiRemove(keys);

    return { ...state, isLoggedIn: false, user: null };
  }

  switch (action.type) {
    case actionType.LOGGED_IN:
      return loggedIn;
    case actionType.LOGGED_OUT:
      return loggedOut;
    default:
      return state;
  }
};

export default authReducer;
