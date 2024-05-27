'use client';

import { useState } from 'react';
import { RandomComponent } from './randomComponent';

export default function Home() {
  const [c, sc] = useState(0);

  console.log('Main');

  return (
    <>
      <h1 className='text-center text-5xl mt-[25%] mb-5'>Home Page {c}</h1>
      <button type='button' className='mb-5' onClick={() => sc(c + 1)}>
        Incr
      </button>
      <h1 className='text-center text-5xl mb-5'>Testing Test</h1>
      <RandomComponent />
    </>
  );
}
