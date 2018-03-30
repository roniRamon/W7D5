import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const login = (currentUser) => dispatch => {
  APIUtil.login(currentUser)
  .then( (user) => dispatch(receiveCurrentUser(user)));
};

export const signup = (currentUser) => dispatch => {
  APIUtil.signup(currentUser)
  .then((user)=> dispatch(receiveCurrentUser(user)));
};
