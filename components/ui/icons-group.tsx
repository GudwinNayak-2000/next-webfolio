import clsx from 'clsx'
import React from 'react'
import NavIcon from '../header/navigations/nav-icon'
import { Github, Linkedin } from 'lucide-react'
import NavIconQuickAccess from '../header/navigations/nav-icon-quick-access'

const IconsGroup = () => {
  return (
    <ul className={clsx('flex items-center gap-2 justify-end h-full w-full')}>
       <li className={clsx('hidden','sm:block')}>
        <NavIcon
         href="https://www.linkedin.com/in/gudwin-nayak-006a4727b/"
         icon={<Linkedin className={clsx('h-5 w-5')}/>}
         title="Linkedin"
        />
       </li>
       <li className={clsx('hidden','sm:block')}>
        <NavIcon
         href="https://www.linkedin.com/in/gudwin-nayak-006a4727b/"
         icon={<Github className={clsx('h-5 w-5')}/>}
         title="Github"
        />
       </li>
       <li className={clsx('hidden','sm:block')}>
        <div className={clsx('ml-2 mr-4 h-3 w-[1px] bg-slate-200','dark:bg-slate-700')}>

        </div>
       </li>
       <li>
        <NavIconQuickAccess/>
       </li>
    </ul>
  )
}

export default IconsGroup