'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Pathname = '/delete-database' | '/populate-database';

export function ClientLayoutComponent({
  children
}: {
  children: React.ReactNode;
}) {
  const [isOn, setIsOn] = useState({
    ddb: false,
    pdb: false
  });
  const pathname = usePathname();

  const handleClickDdb = () => {
    if (isOn.pdb) return;
    if ((pathname as Pathname) === '/delete-database') return;
    setIsOn(prev => ({ ...prev, ddb: !isOn.ddb }));
  };
  const handleClickPdb = () => {
    if (isOn.ddb) return;
    if ((pathname as Pathname) === '/populate-database') return;

    setIsOn(prev => ({ ...prev, pdb: !isOn.pdb }));
  };

  useEffect(() => {
    if (isOn && (pathname as Pathname) !== '/delete-database') {
      setIsOn(prev => ({ ...prev, ddb: false }));
    }

    if (isOn && (pathname as Pathname) !== '/populate-database') {
      setIsOn(prev => ({ ...prev, pdb: false }));
    }
  }, [pathname]);

  return (
    <>
      <ul className='flex gap-x-8  mb-10 text-green-700 text-2xl [&>*:hover]:text-red-500'>
        <li>
          <Link href='/'>/Home</Link>
        </li>
        <li>
          <Link href='/fetch'>/Fetch</Link>
        </li>
        <li>
          <Link href='/database'>/Database</Link>
        </li>
        <li>
          <Link href='/client'>/Client</Link>
        </li>
        <li onClick={handleClickDdb}>
          <Link href={`${isOn.ddb ? '/delete-database' : ''}`}>
            /Delete DB {isOn.ddb && '?'}
          </Link>
        </li>
        <li onClick={handleClickPdb}>
          <Link href={`${isOn.pdb ? '/populate-database' : ''}`}>
            /Populate DB {isOn.pdb && '?'}
          </Link>
        </li>
      </ul>
      <main className='main'>{children}</main>
    </>
  );
}
