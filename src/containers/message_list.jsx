import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';

import Message from '../components/message';


class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="message-list">
        { this.props.messages.map(message =>
          (<Message
            author={message.author}
            message={message.content}
            created_at={message.created_at}
            key={message.created_at}
          />)
        )}
        <Message messages={this.props.messages} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(reduxState) {
  return {
    messages: reduxState.messages,
    selectedChannel: reduxState.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
