import React, { PropsWithChildren } from "react";
import {ThemeProvider} from 'next-themes'
import ToastProvider from "./toastProvider";
import FramerMotionProvider from "./framerMotionProvider";
import GlobalStateProvider from "./globalStateProvider";


export default function Providers({children}: PropsWithChildren<{}>) {
    return (
       <FramerMotionProvider>
         <ThemeProvider attribute="class" disableTransitionOnChange>
           <GlobalStateProvider>
           <ToastProvider/>
           {children}
           </GlobalStateProvider>
        </ThemeProvider>
       </FramerMotionProvider>
    )
};