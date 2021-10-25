import {useState, useEffect} from 'react'

const useFullList = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchEjercicios = async () => {
            try {
                let res = await fetch (url, {method: 'get'})
                let data = await res.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchEjercicios()
    },[url])

    return{data, loading, error}
}

export default useFullList