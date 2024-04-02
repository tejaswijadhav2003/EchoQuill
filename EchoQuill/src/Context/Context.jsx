import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth } from '../firebase/firebase'; 
import Loading from '../components/Loading/Loading';
const BlogContext = createContext();
function Context({children}) {
    const [currentUser, setCurrentUser] = useState(false);
    const [loading, setloading] = useState(true);
    useEffect(()=>{
      setloading(true);
      const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){
          setCurrentUser(user);
        }
        else{
          setCurrentUser(null);
        }
        setloading(false);
      });
      return ()=> unsubscribe();
    },[currentUser]);
  return (
    <BlogContext.Provider value={{currentUser, setCurrentUser}}>
        {loading? <Loading/>: children}
    </BlogContext.Provider>
  )
}

export default Context

export const Blog = () => useContext(BlogContext);