import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NotFound from './pages/NotFound'
import EjercicioNuevoContainer from "./pages/containers/EjercicioNuevoContainer"
import EjerciciosContainer from './pages/containers/EjerciciosContainer'

const App = () =>(<BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={EjerciciosContainer}/>
                        <Route exact path="/nuevos" component={EjercicioNuevoContainer}/>
                        <Route component={NotFound}/>
                    </Switch>
                    </BrowserRouter>
                )

export default App