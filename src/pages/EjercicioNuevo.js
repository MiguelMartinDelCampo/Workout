import React from "react"
import EjercicioForm from "../components/Form"
import Card from "../components/Card"

const EjercicioNuevo = ({form, onChange, onSubmit}) => (
    <div className="row ExerciseNew_Lateral_Spaces">
        <div className="col-sm ExerciseNew_Card_Space">
            <Card {...form}/>
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
            <EjercicioForm
                onChange={onChange}
                onSubmit={onSubmit}
                form = {form}/>
        </div>
    </div>
)

export default EjercicioNuevo