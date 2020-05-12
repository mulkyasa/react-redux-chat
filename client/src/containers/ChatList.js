import React, {Component} from "react";
import { connect } from 'react-redux';
import ChatItem from "./Chat";
import {loadChat} from '../actions'

class ChatList extends Component {
  componentDidMount() {
    this.props.loadChat();
  }

  render() {
    const listItems = this.props.chats.map((item, index) => (
      <ChatItem
        key={index}
        chats={{...item}}
      />
    ));

    return (
      <div className="col-12 px-0">
        <div className="px-4 pt-4 chat-box bg-white">{listItems}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chats: state.chats
})

const mapDispatchToProps = (dispatch) => ({
  loadChat: () => dispatch(loadChat())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList)
