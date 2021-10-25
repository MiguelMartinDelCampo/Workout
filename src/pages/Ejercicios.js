import React from "react"
import FatalError from "./500"
import Loading from "../components/Loading"
import Welcome from '../components/Welcome'
import EjerciciosLista from '../components/EjerciciosLista'
import Agregar from '../components/Agregar'

const Ejercicios = ({loading, error, data}) => {
    if(loading){
        return <Loading/>
    }
    if(error){
        return <FatalError error={error}/>
    }
    return(
        <div>
            <Welcome 
                username="this is a proyect made with React.js"/>
            <EjerciciosLista
                ejercicio={data}/>
            <Agregar/>
        </div>
    )
}

export default Ejercicios