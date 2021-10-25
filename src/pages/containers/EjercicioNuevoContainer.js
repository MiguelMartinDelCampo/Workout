import React from "react"
import '../../components/styles/Form.css'
import EjercicioNuevo from "../EjercicioNuevo"

class EjercicioNuevoContainer extends React.Component{
    state ={
        form:{
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        }
    }

    handleChange = (e) => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            console.log(this.state.form)
            const data = await fetch('https://apiejercicios.herokuapp.com/api/add',{
                                        method:'POST',
                                        headers:{
                                            'Accept':'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(this.state.form)
                                    })
            const res = await data.json()
            if(res.status){
                window.location.href = '/'
            }
        } catch (error) {
            
        }
    }


    render(){
        return(
            <EjercicioNuevo
                form = {this.state.form}
                onChange = {this.handleChange}
                onSubmit = {this.handleSubmit}/>
        )
    }
}

export default EjercicioNuevoContainer