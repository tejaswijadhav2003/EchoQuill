import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Demo from './components/Demo/Demo'
import HomeHeader from './components/Home/HomeHeader'
import DemoHeader from './components/Demo/DemoHeader'
function App() {
  const [count, setCount] = useState(0)
  const auth =false;
  return (
    <>
      {auth? <HomeHeader/> : <DemoHeader/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/demo' element={<Demo/>}/>
      </Routes>
    </>
  )
}

export default App