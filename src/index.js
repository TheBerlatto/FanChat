import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return <h1>Olá, mundo!</h1>
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)