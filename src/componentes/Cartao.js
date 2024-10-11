import React from 'react'

const Cartao = (props) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${props.imagem})`, backgroundSize: 'cover', height: '200px' }}>
        <div className="card-body d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            {props.children}
        </div>
    </div>
  )
}

export default Cartao
