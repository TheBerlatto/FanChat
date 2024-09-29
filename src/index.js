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
                <div className='row'>
                    <div className='col-12 col-xl-3 col-lg-6 mt-3 mb-3'>
                        <div className='border p-4' style={{ minHeight: '150px' }}>Toretto</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-xl-3 col-lg-6 mb-3'>
                        <div className='border p-4' style={{ minHeight: '150px' }}>Tony Stark</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-xl-3 col-lg-6 mb-3'>
                        <div className='border p-4' style={{ minHeight: '150px' }}>Katniss</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-xl-3 col-lg-6 mb-3'>
                        <div className='border p-4' style={{ minHeight: '150px' }}>Spider Man</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)