const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function postMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: POST_MESSAGE,
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
}

