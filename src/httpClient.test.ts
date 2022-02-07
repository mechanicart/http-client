import { httpClient } from './httpClient';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

describe('httpClient()', () => {
  it('should make a GET request', async () => {
    const response = await httpClient<Todo[]>("https://jsonplaceholder.typicode.com/todos");
    expect(response).toEqual({ type: 'foo', payload: 'bar' });
  });

  it(' 2 + 2 equal 4', () => {
    expect(2 + 2).toEqual(4)
  });
});