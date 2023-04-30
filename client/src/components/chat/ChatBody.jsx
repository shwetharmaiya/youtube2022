import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";

const ChatBody = ({ messages, socket }) => {
  const navigate = useNavigate();

    const handleLeaveChat = () => {
      localStorage.removeItem('user');
      navigate('/');
      window.location.reload();
    };

    return (
      <>
        <header className="chat__mainHeader">
          <p>StudentsParTea</p>
          <button className="leaveChat__btn" onClick={handleLeaveChat}>
            LEAVE CHAT
          </button>
        </header>

        <div className="message__container">
          {messages.map((message) =>
            message.name === localStorage.getItem('user')  ? (
             // currentUser.name ? (
              <div className="message__chats" key={message.id}>
                <p className="sender__name">You</p>
                <div className="message__sender">
                  <p>{message.text}</p>
                </div>
              </div>
            ) : (
              <div className="message__chats" key={message.id}>
                <p>{message.name}</p>
                <div className="message__recipient">
                  <p>{message.text}</p>
                </div>
              </div>
            )
          )}

          <div className="message__status">
            <p>Someone is typing...</p>
          </div>
        </div>
      </>
    );
  };

export default ChatBody;