import {useState, useEffect} from 'react'

const useSessionStorage = (jwt) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(sessionStorage.getItem(jwt))
    }, [])
    return value
}

export default useSessionStorage