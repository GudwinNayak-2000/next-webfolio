'use client'
import React, { useEffect, useState } from 'react'

const useOnScroll = (threshold = 0) => {

    const [isScrolled, setIsScrolled] = useState<boolean>()

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > threshold)
        }
        onScroll()
        document.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [threshold])
    return isScrolled
}

export default useOnScroll