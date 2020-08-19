import React from 'react';

import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="wrapper">
      <div className="nav">
        <img src="../assets/images/logo.svg" alt="" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
