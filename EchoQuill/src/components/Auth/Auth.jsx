import React from 'react'
import Modal from '../../utils/Modal'
function Auth() {
  return (
    <Modal>
      <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem]
        overflow-auto right-0 md:right-[10rem] bg-white shadows transition-all duration-500
        ${modal ? "visible opacity-100" : "invisible opacity-0"}`}>

      </section>
    </Modal>
  )
}

export default Auth