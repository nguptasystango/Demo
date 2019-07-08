import { alertActionType } from '../actions/alert';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertActionType.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertActionType.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertActionType.CLEAR:
      return {};
    default:
      return state
  }
}