import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Demo from './components/Demo/Demo'
import HomeHeader from './components/Home/Header/HomeHeader'
import DemoHeader from './components/Demo/DemoHeader'
import { Navigate } from 'react-router-dom'
import { Blog } from './Context/Context'
import Profile from './components/Home/Profile.jsx/Profile'
function App() {
  const [count, setCount] = useState(0)
  const auth =false;
  const {currentUser} = Blog();
  return (
    <>
      {currentUser? <HomeHeader/> : <DemoHeader/>}
      <Routes>
        {currentUser && <Route path='/' element={<Home/>}/>}
        {!currentUser && <Route path='/demo' element={<Demo/>}/>}
        <Route path='/profile/:userId' element={<Profile/>}/>
        <Route path='*' element={<Navigate to={!currentUser?"/demo":"/"}/>} />
      </Routes>
    </>
  )
}

export default App
