import React from 'react'
import './App.css'
import Login from './components/login'
import UserContextProvider from './context/UserContextProvider';
import Profile from './components/profile';

function App() {

  return (
    <UserContextProvider>
      <div>React Revision</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App