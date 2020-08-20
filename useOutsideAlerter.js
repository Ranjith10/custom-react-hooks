import { useEffect } from 'react'

const useOutsideAlerter = (ref, toggleHandler) => {
    //TODO wrap the toggleHandler in useCallback for optimization

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                toggleHandler(false)
            }
        }

        //* onEvery mouseDown call handleClickOutside
        //* it will conditionally toggle display
        document.addEventListener('mousedown', handleClickOutside)

        //* Unbind listener on unmount - Clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, toggleHandler])
}

export default useOutsideAlerter
