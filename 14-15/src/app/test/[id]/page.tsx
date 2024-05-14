export default function TestDynamicPage({
  params: { id }
}: {
  params: { id: string };
}) {
  console.log('Rendering Test Dynamic Route', id);

  return <h1>Testing Dynamic Page</h1>;
}
