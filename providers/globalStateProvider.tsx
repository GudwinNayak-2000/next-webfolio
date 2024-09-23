"use client"
import React, { createContext, PropsWithChildren, useMemo, useState } from 'react'

export interface GlobalContext{
    isQuickAccessOpen:boolean,
    setQuickAccessOpen:(value:boolean)=>void
}

const DEFAULT_VALUE:GlobalContext={
    isQuickAccessOpen:false,
    setQuickAccessOpen:()=>{}
}
export const GlobalStateContext=createContext<GlobalContext>(DEFAULT_VALUE)
const GlobalStateProvider = ({children}:PropsWithChildren) => {
    const [isQuickAccessOpen,setQuickAccessOpen]=useState<boolean>(DEFAULT_VALUE.isQuickAccessOpen)
    const value=useMemo(()=>({
        isQuickAccessOpen,setQuickAccessOpen
    }),[isQuickAccessOpen,])
  return (
    <GlobalStateContext.Provider value={value}>
        {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider