# Typescript HTTP client

## Description

Communicating with backend services using HTTP

## Usage

Usage example:

```ts
// example.ts
import { createHttpClient, HttpClient } from "./httpClient";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type PlaceHolderServiceClient = Readonly<{
  getPosts: () => Promise<ReadonlyArray<Todo>>
}>

function createPlaceHolderServiceClient(
  serverUrl: string,
  httpClient: HttpClient,
): PlaceHolderServiceClient {
  const getPosts = async (): Promise<ReadonlyArray<Todo>> => {
    const url = `${serverUrl}/todos`;
    const { parsedBody: todos } = await httpClient.get<ReadonlyArray<Todo>>(url)
    return todos ?? []
  }
  return {
    getPosts
  }
}

const httpClient = createHttpClient()
const placeHolderServiceClient = createPlaceHolderServiceClient('https://jsonplaceholder.typicode.com', httpClient)
placeHolderServiceClient.getPosts().then((todos) => console.log(todos))
```

Don't forget to build a bundle-file with a [browserify](https://github.com/browserify/browserify)

```sh
browserify ./example.ts > ./bundle.js
```

and prepare a test HTML page that will run `bundle.js`
