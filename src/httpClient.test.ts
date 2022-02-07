import { get, httpClient } from './httpClient';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

describe('httpClient()', () => {
  it('make a pure request', async () => {
    const response = await httpClient<Todo[]>("https://jsonplaceholder.typicode.com/todos");
    expect(response).toEqual({ type: 'foo', payload: 'bar' });
  });

  it('make a GET request', async () => {
    const response = await get<{ id: number }>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    expect(response).toEqual({ type: 'foo', payload: 'bar' });
  });

  it(' 2 + 2 equal 4', () => {
    expect(2 + 2).toEqual(4)
  });
});