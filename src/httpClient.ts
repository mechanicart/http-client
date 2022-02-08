interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export type HttpClient = Readonly<{
  get: <T>(url: string, args?: RequestInit) => Promise<HttpResponse<T>>
  post: <T>(url: string, body: any, args?: RequestInit) => Promise<HttpResponse<T>>
  put: <T>(url: string, body: any, args?: RequestInit) => Promise<HttpResponse<T>>
}>

export function createHttpClient(params?: {
  requestInit?: RequestInit
}): HttpClient {
  const baseRequestInit = params?.requestInit;

  const fetch = async <T>(
    request: RequestInfo
  ): Promise<HttpResponse<T>> => {
    const response: HttpResponse<T> = await window.fetch(request);
    try {
      // may error if there is no body
      response.parsedBody = await response.json();
    } catch (ex) { }

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }

  const get = async <T>(
    url: string,
    args: RequestInit = { method: "get" }
  ): Promise<HttpResponse<T>> => {
    return await fetch<T>(new Request(url, { ...args, ...baseRequestInit }));
  };

  const post = async <T>(
    url: string,
    body: any,
    args: RequestInit = { method: "post", body: JSON.stringify(body) }
  ): Promise<HttpResponse<T>> => {
    return await fetch<T>(new Request(url, args));
  };

  const put = async <T>(
    url: string,
    body: any,
    args: RequestInit = { method: "put", body: JSON.stringify(body) }
  ): Promise<HttpResponse<T>> => {
    return await fetch<T>(new Request(url, args));
  };

  return {
    get,
    post,
    put
  }
}
