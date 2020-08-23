import { useEffect, useState } from 'react'

const useWindowSize = () => {

    //* initialize windowSize as 0 or undeinfed
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    })

    //* Capture the window size whenever it changes
    useEffect(() => {
        const handleWindowSize = () => {
            setWindowSize({
                height = window.innerHeight,
                width = window.innerWidth,
            }) 
        }

        //* Call handler whenever resize is triggered
        window.addEventListener('resize', handleWindowSize)

        //* Call the handler - for initial window values
        handleWindowSize()

        //* Remove handler - cleanup action
        return () => window.removeEventListener('resize', handleWindowSize)
    }, []) 

    return windowSize

}

export default useWindowSize