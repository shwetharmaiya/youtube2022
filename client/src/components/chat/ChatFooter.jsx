import React, { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const ChatFooter = ({ socket , currentUser}) => {
  const [message, setMessage] = useState('');
  //const { currentUser } = useContext(AuthContext);
  const handleSendMessage = (e) => {
    e.preventDefault();
    //let currentUser = localStorage.getItem('user');
      
    if (message.trim()  ) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('user'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;