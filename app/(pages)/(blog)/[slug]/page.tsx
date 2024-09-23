
import { mergeOpenGraph } from '@/lib/mergeOpenGraph'
import { Metadata } from 'next'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>page</div>
  )
}

export default page

export const metadata: Metadata = {
  title: "Blog -Gudwin's Portfolio",
  description: "A portfolio website created using Next.js and framer motion",
  icons:{
    icon:""
  },
  openGraph:mergeOpenGraph({
    title: "Home -Gudwin's Portfolio",
    url:'/'
  })
};

