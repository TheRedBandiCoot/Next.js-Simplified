'use client';

import React from 'react';

export default function templateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    console.log('Template Render');
  }, []);
  return (
    <>
      <h3>Template</h3>
      {children}
    </>
  );
}
