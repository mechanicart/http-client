import { get, httpClient } from './httpClient';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getUser(id: number) {
  fetch(`/users/${id}`)
}

describe('httpClient()', () => {
  it.skip('make a pure request', async () => {
    const response = await httpClient<Todo[]>("https://jsonplaceholder.typicode.com/todos");
    expect(response).toEqual({ type: 'foo', payload: 'bar' });
  });

  it.skip('make a GET request', async () => {
    await get<Todo[]>("https://jsonplaceholder.typicode.com/posts");
  });

  it('calls the right route', async () => {
    // Create an empty mock function which just returns nothing
    const mockedFetch = jest.fn()
    // Set the global fetch to be this function
    global.fetch = mockedFetch
    const res = await getUser(12)
    expect(mockedFetch).toHaveBeenCalledWith('/users/12')
  })

  it('calls with a spyOn', async () => {
    jest.spyOn(global, 'fetch')
    await getUser(12)
    expect(global.fetch).toHaveBeenCalledWith('/users/12')
  })

});