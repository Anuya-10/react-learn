import React from 'react';
import UserContextProvider from './content/usercontextprovider.jsx';
import Login from './components/login.jsx';
import Profile from './components/profile.jsx';
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
