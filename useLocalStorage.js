import { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const initialLocalValue = window.localStorage.getItem(key) || initialValue

    const [value, setValue] = useState(initialLocalValue)

    //  todo - change the useffect logic to a handler that accepts a param
    //* Converted useEffect to Handler

    //* Return is similar to that of useState
    const setLocalStorageValue = (value) => {
        //Update state
        setValue(value)
        //Update Local storage value
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [value, setLocalStorageValue]
}

export default useLocalStorage
