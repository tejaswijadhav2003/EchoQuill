import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import Auth from '../Auth/Auth'
function DemoHeader() {
  const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      const scrollMe = () => {
        window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
      };
      window.addEventListener("scroll", scrollMe);
    }, []);
  
  return (
    
    <header className={`border-b border-black sticky top-0 z-50 bg-banner ${isActive ? "bg-white" : "bg-banner"}
    transition-all duration-500`}>
        <div className='size h-[70px] flex items-center justify-between'>
            <Link>
            <img 
                className='h-[2.5rem]'
                src={logo}
                alt='logo'
            />
            </Link>
            <div className=' flex items-center gap-5'>
              <div className='hidden text-sm sm:flex items-center gap-5'>
                <Link to="/story">My Story</Link>
                <Link to="/">Membership</Link>
                <Link  to="/">Write Article</Link>
                
              </div>
              <div className='relative'>
                <button className=' text-sm sm:flext items-center gap-5 px-5'> Sign In</button>
                <Auth/>
                <button className='bg-black text-white rounded-full px-3 p-2 text-sm'>Get Started</button>

              </div>
            </div>
        

        </div>
    </header>
  )
}

export default DemoHeader