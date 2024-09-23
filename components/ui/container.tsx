import clsx from 'clsx'
import React from 'react'


const Container = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className={clsx('container mx-auto w-full h-full',className)}>
        {children}
    </div>
  )
}

export default Container