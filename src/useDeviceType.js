import { useEffect, useState } from "react";
import tokens from './tokens.json';

export const useDeviceType = () => {
    const mobile = tokens.grid.mobile.breakpoint
    const tablet = tokens.grid.tablet.breakpoint
    const desktop = tokens.grid.desktop.breakpoint
    
    const [isTablet, setTablet] = useState(
        window.innerWidth >= tablet && window.innerWidth < desktop,
    )
    const [isMobile, setMobile] = useState(
        window.innerWidth >= mobile && window.innerWidth < tablet,
    )

    const updateMedia = () => {
        setTablet(window.innerWidth >= tablet && window.innerWidth < desktop)
        setMobile(window.innerWidth >= mobile && window.innerWidth < tablet)
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia)
        return () => window.removeEventListener('resize', updateMedia)
    }, [])
    return { isTablet, isMobile}
}

export default useDeviceType