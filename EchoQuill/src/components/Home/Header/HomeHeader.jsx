import React from 'react';
import Logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import Search from './Search';
import { LiaEditSolid } from "react-icons/lia";
function HomeHeader() {
  return (
    <header className='border-b border-gray-200'>
      <div className='size h-[60px] flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Link to={"/"}>
         
          <img 
          className='h-[2.5rem]'
          src={Logo} alt="" 
          />
          </Link>
          <Search></Search>
        </div>
        <div>
          <Link to="/write" className='hidden'>
            <span>
              <LiaEditSolid/>
            </span>
            <span className='text-sm mt-2'>
              Write
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader