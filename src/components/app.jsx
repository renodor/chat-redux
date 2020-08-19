import React from 'react';

import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="wrapper">
      <div className="nav">
        <img src="../assets/images/logo.svg" alt="" />
      </div>
      <div className="channels">
        <div className="chat-title">
          Redux Chat
        </div>
      </div>
      <MessageList />
    </div>
  );
};

export default App;
