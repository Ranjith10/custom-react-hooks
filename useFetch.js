import { useEffect, useState } from 'react'

const useFetch = (url = '', options = null) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)
    //Replace Axios or any fetching library
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data)
          setError(null)
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error)
          setData(null)
        }
      })
      .finally(() => isMounted && setLoading(false))
    //UnMounting
    return () => (isMounted = false)
  }, [url, options])
  return { loading, error, data }
}

export default useFetch
