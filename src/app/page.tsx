'use client'

import Head from 'next/head'
import RandomFox from './components/RandomFox';
import { useState } from 'react';

type ImageItems = {
  id: string,
  url: string,
}

export default function Home() {
  const random = () => Math.floor(Math.random() * 123) + 1;
  const generateId = () => Math.random().toString(36).substr(2, 9);
  const [images, setImages] = useState<Array<ImageItems>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` }
  ]);

  return (
    <div>
      <Head>
        <title>Platzi </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-10/12 mx-auto my-5'>
        <h1 className='text-4xl'>Generador de imágenes de zorritos</h1>
        <div className='flex gap-5'>
          {images &&
            images.map(({ id, url }) => (
              <div key={id}>
                <RandomFox
                  image={url}
                />
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}