import { userActionType } from '../actions/alert';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userActionType.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userActionType.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userActionType.LOGIN_FAILURE:
      return {};
    case userActionType.LOGOUT:
      return {};
    default:
      return state
  }
}