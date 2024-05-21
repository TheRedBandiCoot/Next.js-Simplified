'use client';

import 'client-only';
import { useEffect, useState } from 'react';
export function Window() {
  const [h, SH] = useState(0);
  useEffect(() => {
    SH(window.innerHeight);
  }, []);
  return <h1>{h}</h1>;
}
