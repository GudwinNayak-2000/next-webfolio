import React,{PropsWithChildren} from 'react'
import { MotionConfig as MotionProvider,domAnimation,LazyMotion } from "framer-motion"


export default function FramerMotionProvider({children}:PropsWithChildren){
    return (
        <MotionProvider reducedMotion='user'>
            <LazyMotion strict features={domAnimation}>
                {children}
            </LazyMotion>
        </MotionProvider>
    )
}