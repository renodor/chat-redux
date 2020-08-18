import { FETCH_MESSAGES } from '../actions';

export default function(state = null, action) {
  // needed to handle default state (initialization)

  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    default:
      return state;
  }
}
