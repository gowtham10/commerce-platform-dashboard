import { RequestType } from "@/components/charts/charts.interface";
import { FetcherArgs } from "./http.helper";

export const constructSWRKey = <F, P>(filters: F, request: RequestType<P>): FetcherArgs  => {
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
