import {useEffect, useState} from 'react';

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const resizeWindow = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener('resize', resizeWindow)

        return () => window.removeEventListener('resize', resizeWindow)

    }, []);

    return {width, height}
}

export default useWindowSize