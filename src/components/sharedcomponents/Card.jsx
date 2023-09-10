import React from 'react'
import './Card.css'

const Card = ({data}) => {
  return (
    <div className='card-wrapper'>
      <div className='imgWrapper'>
        <img src={data.img} alt={data.title} />
      </div>
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </div>
  )
}

export default Card
