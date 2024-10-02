import React from 'react'

const Personagem = (props) => {
  return (
    <div 
        className='border p-4 d-flex align-items-end' 
        style={{ minHeight: '150px' }}>
        {props.personagem}
    </div>
  )
}

export default Personagem
