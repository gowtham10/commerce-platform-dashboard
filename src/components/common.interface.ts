export interface RequestType {
  path: string;
  method: "GET" | "POST";
  payload?: any;
  polling?: "SSE" | "WEB_SOCKET" | "NONE";
  headers?: any;
}


