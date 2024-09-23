'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import Logo from './logo';
import clsx from 'clsx';

const NavLogo = ({ href, title }: { href: string; title: string }) => {

    const pathname = usePathname()
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={clsx('h-9 flex items-center gap-2 rounded-xl px-2')}
            aria-label={title}
        >
            <Logo active={isActive} />
        </Link>
    )
}

export default NavLogo