import React from 'react'

const Cartao = ({imagem, nome, onSelect}) => {
  return (
    <div 
      className= 'cartao' 
      style={{ backgroundImage: `url(${imagem})`}}
      onClick={onSelect}>
      <div className= 'cartao-conteudo cartao'>
            <h5 className='titulos' style={{fontWeight: '300'}}>{nome}</h5>
      </div>
    </div>
  )
}

export default Cartao
