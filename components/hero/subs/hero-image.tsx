"use client"
import clsx from 'clsx'
import Image from 'next/image';
import React, { useState } from 'react'
import { useAnimationControls, m } from 'framer-motion';
import ImageAnimation from './image-animation';
import IconCloud from '@/components/ui/icon-cloud';



const HeroImage = () => {
    const [showIconCloud, setShowIconCloud] = useState(false);

    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma",
    ];
    const controlsImage = useAnimationControls();
    const controlsOutline = useAnimationControls();
    return (
        <div className={clsx('relative h-full w-full')}>
            {showIconCloud ? (
                <div className=''>
                    <IconCloud iconSlugs={slugs} />
                </div>
            ): null}
            <div
                className={clsx(
                    '',
                    ''
                )}
            >
                <div className={clsx('absolute top-[50%] translate-y-[-50%] left-[50%] h-[400px] w-[400px] translate-x-[-50%] justify-center items-center flex overflow-hidden')}>
                    <m.div
                        className={clsx('')}
                        initial={{ opacity: 1 }}
                        animate={controlsOutline}
                    >
                        <ImageAnimation
                            onAnimationComplete={() => {
                                controlsOutline.start({
                                    opacity: 0,
                                    transition: {
                                        duration: 0.2,
                                        delay: 0.15,
                                    },
                                });

                                controlsImage.start({
                                    opacity: 1,
                                    transition: {
                                        duration: 0.15,
                                    },
                                });
                                setShowIconCloud(true);
                            }}
                        />
                    </m.div>

                    <m.div
                        className={clsx('absolute top-[50%] left-[50%] translate-y-[-50%] h-[450px] w-[450px] translate-x-[-50%] justify-center items-center flex overflow-hidden')}
                        initial={{ opacity: 0 }}
                        animate={controlsImage}
                    >

                        <Image
                            alt="Gudwin Nayak illustration"
                            src="/images/cute.png"
                            layout="fill"
                            // height={400}
                            // width={400}
                            className={clsx(
                                'hidden max-w-none',
                                'lg:block',
                                'dark:brightness-[.82]'
                            )}
                            quality={100}
                            objectFit='cover'
                            priority
                        />
                    </m.div>
                </div>
            </div>
        </div>
    )
}

export default HeroImage