import React from "react"
import Card from './Card'

const listaEjersisios = ({ejercicio}, eliminar) => (
        ejercicio.map((ejercicio) => {
            return(
                <Card
                    {...ejercicio}/>
            )
        })
)

export default listaEjersisios