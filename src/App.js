import React from 'react'
import Login from './components/Login';
import Profile from './components/Profile';
import "./App.css"
import ChangeColor from './components/ChangeColor';
function App() {
  return (
    <div>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  )
}

export default App;