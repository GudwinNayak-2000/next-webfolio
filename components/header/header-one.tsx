'use client'

import React from 'react'
import Container from '../ui/container'
import Row from '../ui/row'
import NavLogo from './navigations/nav-logo'
import NavMenu from './navigations/nav-menus'
import clsx from 'clsx'
import IconsGroup from '../ui/icons-group'
import QuickAccess from '../ui/quick-access'
import useOnScroll from '@/hooks/useOnScroll'

type Props = {}

const HeaderOne = (props: Props) => {
  const isScrolled =useOnScroll(100)
  return (
    <header className={clsx('transition-all absolute h-[72px] top-0 bg-transparent inset-x-0 z-[1000]',
      isScrolled && 'animate-moov-down absolute top-0 sticky backdrop-blur shadow-sm dark:shadow-slate-500'
  )}>
      <QuickAccess />
      <Container>
          <Row className='justify-between'>
              <Row className='gap-4 lg:gap-12 w-auto'>
                  <NavLogo href="/" title="home" />
                  <NavMenu />
              </Row>
              <IconsGroup/>
          </Row>
      </Container>


  </header>
  )
}

export default HeaderOne