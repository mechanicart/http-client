
async function httpClient(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

// const data = await httpClient("https://jsonplaceholder.typicode.com/todos");
