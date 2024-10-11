"use client"
import clsx from 'clsx';
import React from 'react'
import { SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";
import { m } from 'framer-motion'
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { PiFramerLogoLight } from "react-icons/pi";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button';

const HeroTech = () => {

    const animation = {
        hide: { x: -8, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <div>
            <m.p className='mb-2 text-sm text-slate-600 dark:text-slate-400'
                initial={animation.hide}
                animate={animation.show}
                transition={{ delay: 0.6 }}
            >
                current favorite tech stack:
            </m.p>
            <m.ul
                className='inline-flex gap-4'
                initial="hide"
                animate="show"
                transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
            >
                <m.li variants={animation}>
                    <div>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button>
                                        <RiNextjsLine className={clsx('h-6 w-6')} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Next js</p>
                                </TooltipContent>
                            </Tooltip>
                    </div>
                </m.li>
                <m.li variants={animation}>
                    <div>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button>
                                    <FaReact className={clsx('h-6 w-6')} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>React js</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </m.li>
                <m.li variants={animation}>
                    <div>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button>
                                    <TbBrandTypescript className={clsx('h-6 w-6')} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Typescript</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </m.li>
                <m.li variants={animation}>
                    <div>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button>
                                    <SiTailwindcss className={clsx('h-6 w-6')} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Tailwind CSS</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </m.li>
                <m.li variants={animation}>
                    <div>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button>
                                    <SiShadcnui className={clsx('h-6 w-6')} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Shadcn UI</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </m.li>
                <m.li variants={animation}>
                    <div>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button>
                                    <PiFramerLogoLight className={clsx('h-6 w-6')} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Framer Motion</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </m.li>
            </m.ul>
        </div>
    )
}

export default HeroTech