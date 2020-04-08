import React, { Component } from "react";
import ChatList from "../containers/ChatList";
import ChatForm from "../containers/ChatForm";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

export default class ChatBox extends Component {
  render() {
    return (
      <div className="container py-4 px-4">
        <h1 className="display-4 text-center text-white mb-0">React Chat</h1>
        <p className="lead pb-3 text-center small text-white">
          Made by{" "}
          <a href="https://www.github.com/mulkyasa/" className="text-white">
            Yasa Mulky Al Afgani
          </a>
        </p>
        <div className="rounded-lg overflow-hidden shadow">
          <ChatList />
          <ChatForm />
        </div>
      </div>
    );
  }
}
