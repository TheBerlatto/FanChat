import React from 'react'

const Personagem = ({nome, onSelect}) => {
  return (
    <div 
        className='border p-4 d-flex align-items-end' 
        style={{ minHeight: '150px' }}  onClick={onSelect}>
        <h5>{nome}</h5>
    </div>
  )
}

export default Personagem
