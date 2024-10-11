import React from 'react'

const Cartao = ({imagem, nome, onSelect}) => {
  return (
    <div 
      className="card custom-card" 
      style={{ backgroundImage: `url(${imagem})`, backgroundSize: 'cover', height: '200px' }}
      onClick={onSelect}>
        <div className="card-body d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h5 className='text-white'>{nome}</h5>
        </div>
    </div>
  )
}

export default Cartao
