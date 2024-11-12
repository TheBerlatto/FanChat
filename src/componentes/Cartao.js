import React from 'react'

const Cartao = ({imagem, nome, onSelect}) => {
  return (
    <div 
      className="card custom-card cartao" 
      style={{ backgroundImage: `url(${imagem})`}}
      onClick={onSelect}>
        <div className="card-body d-flex align-items-end justify-content-start cartao">
            <h5 className='titulos' style={{fontWeight: '300'}}>{nome}</h5>
        </div>
    </div>
  )
}

export default Cartao
