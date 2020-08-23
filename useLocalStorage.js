import { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const initialLocalValue = window.localStorage.getItem(key) || initialValue

    const [value, setValue] = useState(initialLocalValue)

    //  todo - change the useffect logic to a handler that accepts a param

    useEffect(() => {
        window.localStorage.setItem(key, initialValue)
    }, [])
}

export default useLocalStorage
