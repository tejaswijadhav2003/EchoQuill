import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
function DemoHeader() {
  return (
    <header className='border-b border-black sticky top-0 z-50'>
        <div className='size h-[70px] flex items-center justify-between'>{
            <Link>
            <img 
                className='h-[2.5rem]'
                src={logo}
                alt='logo'
            />
            </Link>
        }

        </div>
    </header>
  )
}

export default DemoHeader