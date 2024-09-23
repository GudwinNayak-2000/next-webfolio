'use client'

import useGlobal from '@/hooks/useGlobal'
import clsx from 'clsx'
import { MessageCircleQuestionIcon } from 'lucide-react'
import React from 'react'

const NavIconQuickAccess= () => {
    const {isQuickAccessOpen,setQuickAccessOpen}=useGlobal()
  return (
    <button type='button' className={clsx('ml-1 h-9 w-9 flex items-center justify-center gap-2 rounded-xl bg-slate-300/50 text-slate-800 hover:bg-slate-300/70','sm:ml-0 xl:w-auto xl:px-3','dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50')}
    aria-label='Open Quick Access'
    title='Open Quick Access'
    onClick={()=>setQuickAccessOpen(true)}
    >
        <MessageCircleQuestionIcon className='h-5 w-5'/>
        <div className={clsx('hidden items-center gap-2 text-xs font-bold','xl:flex','dark:font-normal')}>
          Quick Access
        </div>
    </button>
  )
}

export default NavIconQuickAccess