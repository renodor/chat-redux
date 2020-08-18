import { FETCH_MESSAGES, POST_MESSAGE } from '../actions';

export default function(state = null, action) {
  // needed to handle default state (initialization)

  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case POST_MESSAGE: {
      const messages = state;
      const newMessages = messages.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    }
    default:
      return state;
  }
}
