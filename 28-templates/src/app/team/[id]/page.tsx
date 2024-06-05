export default function teamPageId({
  params: { id }
}: {
  params: { id: string };
}) {
  return <h3>Team Page {id}</h3>;
}
