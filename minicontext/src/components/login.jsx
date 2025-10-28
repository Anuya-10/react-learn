import React, { useState, useContext } from 'react';
import UserContext from '../content/usercontext.js';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setuser } = useContext(UserContext); // ✅ match provider key

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ username, password }); // ✅ same name
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      {'      '}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
