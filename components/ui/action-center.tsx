import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'
import { m } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

interface ActionCenterButtonProps {
    icon: any,
    title: string,
    active: boolean
    onClick: () => void
}

const ActionCenterButton = ({ icon, title, active = false, onClick = () => { } }: PropsWithChildren<ActionCenterButtonProps>) => {
    return (
        <button type='button' onClick={onClick}
            className={clsx('relative flex flex-col justify-between overflow-hidden rounded-xl p-4 transition-colors', 'dark:bg-dark',
                [active ? ['bg-white border', 'dark:bg-slate-700'] : 'bg-white/50 border border-slate-300']
            )}>
            <div className={clsx('')}>
                {icon}
            </div>
            <div className={clsx('text-left text-xs font-medium', 'dark:font-normal')}>
                {title}
            </div>
        </button>
    )
}


const ActionCenter = () => {
    const { theme, setTheme } = useTheme()

    const animation = {
        hide: { y: -16, opacity: 1 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                ease: 'easeOut',
                duration: 0.084,
            },
        },
    };


    const handleThemeChange=()=>{
        setTheme(theme==='dark' ? 'light' :'dark')
    }
    return (
        <div className={clsx('flex flex-col gap-8 p-2')}>
            <m.div className={clsx('px-2 text-xl font-bold flex h-24 gap-4')}
                variants={animation}
            >
                  <ActionCenterButton
                        active={theme === 'dark'}
                        title={theme === 'dark' ? 'Dark Mode: On' : 'Dark Mode: Off'}
                        onClick={handleThemeChange}
                        icon={
                            <m.div
                                animate={
                                    theme === 'dark'
                                        ? { rotate: [90, 0] }
                                        : { rotate: [90.01, 0] }
                                }
                                transition={{ ease: 'easeOut', duration: 0.8 }}
                                className={clsx('absolute top-4 left-4 h-36 w-36 rounded-full')}
                            >
                                <m.div
                                    animate={
                                        theme === 'dark'
                                            ? { opacity: [0.01, 1], scale: [0.801, 1] }
                                            : { opacity: [0, 1], scale: [0.8, 1] }
                                    }
                                    transition={{ ease: 'easeOut', duration: 0.8 }}
                                    className={clsx('absolute top-0')}
                                >
                                    {theme === 'dark' ? (
                                        <Moon className={clsx('h-5 w-5')} />
                                    ) : (
                                        <Sun className={clsx('h-5 w-5')} />
                                    )}
                                </m.div>
                                <m.div
                                    animate={
                                        theme === 'dark'
                                            ? { opacity: [1, 0], scale: [1, 0.801] }
                                            : { opacity: [1, 0.01], scale: [1, 0.8] }
                                    }
                                    transition={{ ease: 'easeOut', duration: 0.8 }}
                                    className={clsx('absolute bottom-0')}
                                >
                                    {theme === 'dark' ? (
                                        <Sun className={clsx('h-5 w-5 -rotate-90')} />
                                    ) : (
                                        <Moon className={clsx('h-5 w-5 -rotate-90')} />
                                    )}
                                </m.div>
                            </m.div>
                        }
                    />
            </m.div>
        </div>
    )
}

export default ActionCenter