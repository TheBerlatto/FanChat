import React from 'react'

const Cartao = ({imagem, nome, onSelect}) => {
  return (
    <div 
      className="card custom-card" 
      style={{ 
        backgroundImage: `url(${imagem})`, 
        backgroundSize: 'cover', 
        height: '200px',
        cursor: 'pointer'}}
      onClick={onSelect}>
        <div className="card-body d-flex align-items-end justify-content-start" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%' }}>
            <h5 className='text-white' style={{margin: '0', fontFamily: 'Afacad Flux'}}>{nome}</h5>
        </div>
    </div>
  )
}

export default Cartao
