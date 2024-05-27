'use client';
import { useSwrTodo } from './apiCall';
const API_URI = 'https://jsonplaceholder.typicode.com/todos/1';

export default function TodoLoad() {
  const { data, loading, mutate } = useSwrTodo(API_URI);

  return (
    <div className='todo-page-container'>
      <p>title</p> <b>:</b>
      {data?.title ? (
        <></>
      ) : (
        <button type='button' disabled={loading} onClick={() => mutate()}>
          {loading ? 'Fetching...' : 'Fetch'}
        </button>
      )}
      {<span>{data?.title}</span>}
    </div>
  );
}
