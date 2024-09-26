import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <div
            className='container border mt-2'>
            <div className='row'>
                <div className='col-12'> 
                    <h1 className='text-center'>Escolha um personagem para conversar:</h1>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)