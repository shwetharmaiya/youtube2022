import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatPage from './ChatPage';

const Home = ({socket}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', user);
    <ChatPage socket={socket} />
    navigate('/chat/chatPage');
 };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;
