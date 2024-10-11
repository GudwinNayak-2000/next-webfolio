import React, { PropsWithChildren } from "react";
import {ThemeProvider} from 'next-themes'
import ToastProvider from "./toastProvider";
import FramerMotionProvider from "./framerMotionProvider";
import GlobalStateProvider from "./globalStateProvider";
import { TooltipProvider } from "@/components/ui/tooltip";


export default function Providers({children}: PropsWithChildren<{}>) {
    return (
       <FramerMotionProvider>
         <ThemeProvider attribute="class" disableTransitionOnChange>
           <GlobalStateProvider>
           <ToastProvider/>
           <TooltipProvider>
           {children}
           </TooltipProvider>
           </GlobalStateProvider>
        </ThemeProvider>
       </FramerMotionProvider>
    )
};