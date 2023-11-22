import { RequestType } from "@/components/common.interface";
import { FetcherArgs } from "./http.helper";

export const constructSWRKey = <F>(filters: F, request: RequestType): FetcherArgs  => {
  const { path, method = "GET", payload = {}, headers = {} } = request;

  return [path, {
    method,
    headers,
    body: {
      ...payload,
      filters,
    },
  }];
}
