import { userActionType } from '../actions/alert';

export function registration(state = {}, action) {
  switch (action.type) {
    case userActionType.REGISTER_REQUEST:
      return { registering: true };
    case userActionType.REGISTER_SUCCESS:
      return {};
    case userActionType.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}