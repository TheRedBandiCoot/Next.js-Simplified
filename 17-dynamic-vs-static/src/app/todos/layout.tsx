export default function todosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="page-title">Todos</h1>
      {children}
    </>
  );
}
