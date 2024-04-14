import React, { useState } from 'react';
import Logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import Search from './Search';
import { LiaEditSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import Modal from "../../../utils/Modal"
import UserModal from './UserModal';
function HomeHeader() {
  const [modal, setmodal] = useState(false);
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
          <Search/>
        </div>
        <div className='flex items-center gap-3 sm:gap-7'>
          <Link to="/write" className='hidden md:flex items-centre gap-1 text-gray-500'>
            <span>
              <LiaEditSolid/>
            </span>
            <span className='text-sm mt-2'>
              Write
            </span>
          </Link>
          <span className="text-3xl text-gray-500 cursor-pointer">
            <IoMdNotificationsOutline />
          </span>
          <div className='flex items-center relative'>
            <img 
              onClick={()=>setmodal(true)}
              className='w-[2.3rem] hr-[2.3rem] object-cover rounded-full cursor-pointer'
            src="/profile.jpg" alt=""
             />
             <span className="text-gray-500 cursor-pointer">
              <MdKeyboardArrowDown />
            </span>
            <Modal modal={modal} setmodal={setmodal}>
              <div
                className={`${
                  modal ? "visible opacity-100%" : "invisible opacity-0"
                } transition-all duration-100`}>
                <UserModal setmodal={setmodal} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader