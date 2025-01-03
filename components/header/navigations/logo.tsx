import clsx from 'clsx'
import React from 'react'

const Logo = ({ active = false }: { active?: boolean }) => {
    return (
        <div className={clsx('flex items-center gap-1.5 font-bold')}>
            <div
                className={clsx(
                    'flex items-center justify-center  h-6 w-6 rounded-lg'
                    ,
                    [
                        active
                            ? 'border-primary-900 bg-primary-900 dark:border-primary-500 dark:bg-primary-500'
                            : 'border border-primary-900 dark:border-white',
                    ]
                )}
            >
                <div
                    className={clsx(
                        'h-3.5 w-0.5 rotate-12 rounded-full',
                        'sm:h-3 sm:w-0.5',
                        [active ? 'bg-white' : 'bg-primary-900 dark:bg-white']
                    )}
                />
            </div>
            <div className={clsx('hidden sm:block text-xl tracking-tightest')}>
                <span className={clsx('text-black font-bold', 'dark:text-slate-100')}>{' { '}Gudwin</span>
                <span className={clsx('text-primary-900 font-bold', 'dark:text-slate-100')}>
                {' </> ' + ' } '}
                </span>
            </div>
        </div>
    )
}

export default Logo