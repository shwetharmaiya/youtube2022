import React, { useEffect, useState, useContext } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
//import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";


const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState('');
  
  //localStorage.setItem('user', currentUser.name);
  //socket.emit('newUser', { user, socketID: socket.id });

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} socket={socket} />
        <ChatFooter socket={socket} currentUser= {currentUser}/>
      </div>
    </div>
  );
};

export default ChatPage;