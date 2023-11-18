export interface FetcherOptions {
  method: "GET" | "POST";
  headers?: any;
  body?: any;
}
export type FetcherArgs = [url: string, options: FetcherOptions];

export const getFetcher = <R>([url, options]: FetcherArgs): Promise<R> =>
  fetch(url, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  }).then((res) => res.json());

export const postFetcher = <R>([url, options]: FetcherArgs): Promise<R> =>
  fetch(url, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(options.body),
  }).then((res) => res.json());
