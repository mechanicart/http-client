import { httpClient } from './httpClient';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

describe('httpClient()', () => {
  it('should make a GET request', async () => {
    const response = httpClient<Todo[]>("https://jsonplaceholder.typicode.com/todos");
    expect(response).toEqual({ type: 'foo', payload: 'bar' });
  });
});