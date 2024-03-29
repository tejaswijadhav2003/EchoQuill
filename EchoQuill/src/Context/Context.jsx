import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const BlogContext = createContext();
function Context({children}) {
    const [currentUser, setCurrentUser] = useState(false);
  return (
    <BlogContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
    </BlogContext.Provider>
  )
}

export default Context

export const Blog = () => useContext(BlogContext);