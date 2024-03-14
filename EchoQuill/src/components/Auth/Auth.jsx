import React from 'react'
import Modal from '../../utils/Modal'
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import { useState } from 'react';
function Auth() {
  const [createUser, setCreateUser] = useState(false);
  const [modal, setmodal] = useState(true);
  const hidden = modal? "visible opacity-100" : "invisible-opacity-0";
  return (
    <Modal modal={modal} setmodal = {setmodal} hidden = {hidden}>
      <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem]
        overflow-auto right-0 md:right-[10rem] bg-white shadows transition-all duration-500
        ${modal ? "visible opacity-100" : "invisible opacity-0"}`}>
      <button 
      onClick={()=>setmodal(false)}
      className='absolute top-8 right-8 text-2xl hover:opacity-50'><LiaTimesSolid/></button>
      <div className='flex flex-col justify-center items-center gap-[3rem'>
        <>
          <h2 className='text-2xl pt-[5rem] py-5'>{createUser? "Join Us" : "Welcome Back"}</h2>
          <div className='flex flex-col justify-center items-center gap-[3rem]'>
            <Button
                  
                  icon={<FcGoogle className="text-xl" />}
                  text={`${createUser ? "Sign Up" : "Sign In"} With Google`}
                />
                <Button
                  icon={<MdFacebook className="text-xl text-blue-600" />}
                  text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`}
                />
                <Button
                 
                  icon={<AiOutlineMail className="text-xl" />}
                  text={`${createUser ? "Sign Up" : "Sign In"} With Email`}
                />
          </div>
          <p>
            No Account
            <button 
            onClick={()=>setCreateUser(!createUser)}
            className='text-green-600 hover:text-green-700 font-bold'>Create One</button>
             {createUser ? "Sign In" : "Create one"}
          </p>
          
        </>
        <p className="md:w-[30rem] mx-auto text-center text-sm mb-[3rem]">
            Click “Sign In” to agree to Medium’s Terms of Service and
            acknowledge that Medium’s Privacy Policy applies to you.
          </p>
      </div>
      </section>
    </Modal>
  )
}


const Button = ({ icon, text, click }) => {
  return (
    <button
      onClick={click}
      className="flex items-center gap-10 sm:w-[20rem] border border-black
        px-3 py-2 rounded-full">
      {icon} {text}
    </button>
  );
};

export default Auth