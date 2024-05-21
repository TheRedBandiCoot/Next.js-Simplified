import { getTodos } from '@/api/todos';
import Child from '@/components/Child';
import { MySelect } from '@/components/MySelect';
import { TodoList } from '@/components/TodoList';
import { Window } from '@/components/Window';

export default async function Home() {
  const todos = await getTodos();
  console.log('Home');

  return (
    <>
      <h1>Todos : {todos.length}</h1>
      <hr />
      <Child />
      <span>
        Window Inner-Height : <Window />
      </span>
      <MySelect />
      <TodoList />
    </>
  );
}
