import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const ChatBody = ({ messages }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
 localStorage.setItem('user', currentUser.name);

    const handleLeaveChat = () => {
      localStorage.removeItem('user');
      navigate('/');
      window.location.reload();
    };

    return (
      <>
        <header className="chat__mainHeader">
          <p>Hangout with Colleagues</p>
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