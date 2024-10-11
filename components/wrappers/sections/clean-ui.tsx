import Container from '@/components/ui/container'
import clsx from 'clsx'
import React from 'react'
import { m } from 'framer-motion'
import SectionTitle from './section-title'

type Props = {}

const CleanUi= (props: Props) => {
  return (
    <div className={clsx('mb-8')}>
    <div>
    <Container>
        <SectionTitle title="" caption="" description="">

        </SectionTitle>
      </Container>
    </div>

    <SectionContent>
      <Container>
        <div className={clsx('flex','lg:gap-12')}>
          <m.div initial="hide" animate="show" transition={{delayChildren:0.7,staggerChildren:0.34}} className={clsx('-mt-8 hidden flex-1 flex-col gap-3','lg:flex')}>

          </m.div>
        </div>
      </Container>
    </SectionContent>
    </div>
  )
}

export default CleanUi