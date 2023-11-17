import dynamic, { DynamicOptions } from 'next/dynamic';
import { useMemo } from "react";
import {DynamicLoaderType, getDynamicLoader} from "@/utils/loaders";

export default function useLazy<P,>(
  dynamicLoaderKey: string,
  key: string,
  ssr = false,
): React.ComponentType<P> | null {

  const dynamicLoader = useMemo<DynamicLoaderType>(
    () => getDynamicLoader(dynamicLoaderKey),
    [dynamicLoaderKey],
  );

  return useMemo<React.ComponentType<P>>(
    () => dynamic<P>(dynamicLoader(key) as DynamicOptions<P>, { ssr }),
    [dynamicLoader, key, ssr],
  );
}
