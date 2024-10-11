'use client'

import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
  return (
   <div className="min-h-screen w-full bg-white flex justify-center items-center">
     <HashLoader color='#980341' size={24}/>
   </div>
  )
}

export default Loading