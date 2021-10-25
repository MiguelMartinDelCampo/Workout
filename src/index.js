import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './Router'


const container = document.querySelector('#root')
ReactDom.render(<App/>, container)

