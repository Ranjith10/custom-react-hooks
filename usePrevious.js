import { useEffect, useRef } from 'react'

const usePrevious = (value) => {
    /*
     *ref object is generic whose current prop is mutable
     */
    const ref = useRef()

    //* only re-run if value changes
    useEffect(() => {
        ref.current = value
    }, [value])

    //Return the previuos value
    return ref.current
}
