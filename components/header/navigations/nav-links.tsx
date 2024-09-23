import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { NavLinkProps } from '@/types'


const NavLink = ({
    title,href,icon
}:NavLinkProps) => {
  return (
    <Link href={href} className={clsx('text-primary-700 font-bold capitalize','dark:text-primary-300')}>
      {title}
    </Link>
  )
}

export default NavLink