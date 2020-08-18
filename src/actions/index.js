const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';


export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

// export function selectFlat(flat) {
// // TODO: Api call! For now, simulate a DB
//   return {
//     type: SELECT_FLAT,
//     payload: flat
//   };
// }

