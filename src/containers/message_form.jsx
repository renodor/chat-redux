import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postMessage } from '../actions';


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postMessage(this.props.selectedChannel, this.props.currentUsername, this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          type="text"
          value={this.state.term}
          onChange={e => this.setState({ term: e.currentTarget.value })}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postMessage }, dispatch);
}

function mapStateToProps(reduxState) {
  return {
    selectedChannel: reduxState.selectedChannel,
    currentUsername: reduxState.currentUsername
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
