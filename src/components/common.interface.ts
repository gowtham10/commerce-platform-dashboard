export interface RequestType<P> {
  path: string;
  method: "GET" | "POST";
  payload?: P;
  polling?: "SSE" | "WEB_SOCKET" | "NONE";
  headers?: any;
}


