import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Demo from './components/Demo/Demo'
import HomeHeader from './components/Home/HomeHeader'
import DemoHeader from './components/Demo/DemoHeader'
import { Navigate } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const auth =false;
  const currentUser = false;
  return (
    <>
      {currentUser? <HomeHeader/> : <DemoHeader/>}
      <Routes>
        {currentUser && <Route path='/' element={<Home/>}/>}
        {!currentUser && <Route path='/demo' element={<Demo/>}/>}
        <Route path='*' element={<Navigate to={!currentUser?"/demo":"/"}/>} />
      </Routes>
    </>
  )
}

export default App
