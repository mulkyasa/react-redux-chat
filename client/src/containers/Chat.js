import { connect } from "react-redux";
import { deleteChat, resendChat } from "../actions";
import ChatItem from "../components/ChatItem";

const mapDispatchToProps = (dispatch, ownProps) => ({
  delete: () => dispatch(deleteChat(ownProps.chats.id)),
  resend: () =>
    dispatch(
      resendChat(ownProps.chat.id, ownProps.chat.name, ownProps.chat.message)
    ),
});

export default connect(null, mapDispatchToProps)(ChatItem);
