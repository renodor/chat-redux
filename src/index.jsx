// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// import middlewares
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUsernameReducer from './reducers/current_username_reducer';


import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  // currentUsername: window.prompt('Please chose your username', 'Username')
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);
const store = createStore(reducers, initialState, middlewares);


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
