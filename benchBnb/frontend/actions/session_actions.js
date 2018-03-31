import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = (currentUser) => dispatch => {
  APIUtil.login(currentUser)
  .then( (user) => dispatch(receiveCurrentUser(user))
    ,(err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const signup = (currentUser) => dispatch => {
  APIUtil.signup(currentUser)
  .then((user)=> dispatch(receiveCurrentUser(user))
    ,(err) => dispatch(receiveErrors(err.responseJSON))
);
};

export const logout = () => dispatch => {
  APIUtil.logout()
  .then((user)=>dispatch(receiveCurrentUser(null)));
};
