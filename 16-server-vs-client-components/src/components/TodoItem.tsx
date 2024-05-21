'use client';

// import Child from './Child';

export function TodoItem({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  console.log('Todo item');

  return (
    <li onClick={() => alert(title)}>
      {title}
      {children}
      {/* <Child /> */}
    </li>
  );
}
