import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectChannel, fetchMessages } from '../actions';


class ChannelList extends Component {
  handleClick = (channel) => {
    if (channel !== this.props.selectedChannel) {
      this.props.selectChannel(channel);
      this.props.fetchMessages(channel);
    }
  }

  render() {
    return (
      <div className="channels-wrapper">
        <div className="chat-title">
          Redux Chat
        </div>
        <div>
          {this.props.channels.map((channel) => {
            return <button key={channel} onClick={() => this.handleClick(channel)} >#{channel}</button>;
          })}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

function mapStateToProps(reduxState) {
  return {
    selectedChannel: reduxState.selectedChannel,
    channels: reduxState.channels
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
