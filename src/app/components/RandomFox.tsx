import React from 'react'

type Props = {
  image: string;
}

const RandomFox = ({image}: Props): JSX.Element => {
  return (
    <img 
      className='rounded-lg shadow-xl' 
      width={320} 
      height='auto' 
      src={image} 
      alt="Imagen Zorrito" 
    />
  )
}

export default RandomFox;