import { routes } from '@/constants'
import clsx from 'clsx'
import React from 'react'
import NavLink from './nav-links'
import NavLinkDropdown from './nav-links-dropdown'

type Props = {}

const NavMenu = (props: Props) => {
  return (
    <nav>
      <ul className={clsx('hidden gap-8 items-center','lg:flex')}>
        {
          routes && routes.map((item,idx)=>(
            <li key={idx}>
               <NavLink title={item.title} href={item.href} icon={item.icon}/>
            </li>
          ))
        }
      </ul>

      <ul className={clsx('lg:hidden')}>
        <li>
          <NavLinkDropdown
               title="Menu" items={routes}/>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu