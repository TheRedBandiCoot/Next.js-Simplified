import Link from 'next/link';

export default function sameRouteConflict() {
  return (
    <>
      <h1>sameRouteConflict - Application</h1>
      <Link href='/samerouteconflict(removethis)'>
        /samerouteconflict(removethis)
      </Link>
    </>
  );
}
