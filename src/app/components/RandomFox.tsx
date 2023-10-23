import React, { useEffect, useRef, useState } from 'react'

type Props = {
  image: string;
  alt: string
}

const RandomFox = ({ image, alt }: Props): JSX.Element => {
  const [source, setSource] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4");
  const node = useRef<HTMLImageElement>(null);
  useEffect(() => {
    // Nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Hey, you!");
          setSource(image);
        }
      });
    });
    // Observa el nodo
    if (node.current) {
      observer.observe(node.current);
    }

    // Desconectadornos del componente una vez sea retirado de React
    return () => {
      observer.disconnect();
    }
  }, [image]);

  return (
    <img
      className='rounded-lg shadow-xl'
      ref={node}
      width={320}
      height='auto'
      src={source}
      alt={alt}
    />
  );
}

export default RandomFox;