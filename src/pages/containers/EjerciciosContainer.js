import React from "react"
import useFullList from '../../hooks/useFullList'
import Ejercicios from '../Ejercicios'

const EjerciciosContainer = () => {

    const {data, loading, error} = useFullList('https://apiejercicios.herokuapp.com/api/list')

    return(
        <Ejercicios
            loading = {loading}
            error = {error}
            data = {data}/>
    )
}

export default EjerciciosContainer