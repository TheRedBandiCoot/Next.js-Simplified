import { cookies, headers } from 'next/headers';
import { Form } from './form';

export default async function Home({ searchParams }: { searchParams: any }) {
  // @ Cookies
  // const c = cookies().getAll();
  // const c = cookies().get('key');
  // const c = cookies().has('key');
  // const c = cookies().get('key')?.name.toString();
  // console.log(c);

  // @ Headers
  // headers().forEach(h => console.log(h));
  // const h = headers().get('User-Agent');
  // const h = headers().has('Content-Type');
  // console.log(h);

  // @ Search Params
  // console.log(searchParams);
  //*    |-> ?key=value => { key : "value" }
  //*    |-> ?key=value&anotherKey=value2 => { key: 'value', anotherKey: 'value2' }
  //*    |-> ?key=value&key=value2 => { key: [ 'value', 'value2' ] }
  //*    |-> ?key=value&key=value => { key: [ 'value', 'value' ] }

  return (
    <>
      <h1>Home Page</h1>
      <h2>Search Params : {searchParams.q}</h2>
      <Form />
    </>
  );
}
