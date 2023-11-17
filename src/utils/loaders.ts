import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { DynamicLoaderKeys } from "../constants";

export type DynamicLoaderType = (k: string) => () => Promise<any>;

export const getDynamicLoader = (key: string): DynamicLoaderType => {
  switch (key) {
    case DynamicLoaderKeys.ICONS:
      return (k: string) => () =>
        import("@heroicons/react/24/outline").then((
          m,
        ) => (m[k] ? m[k] : ExclamationTriangleIcon));
    default:
      return (k: string) => () =>
        import("@heroicons/react/24/outline").then((
          m,
        ) => (m[k] ? m[k] : ExclamationTriangleIcon));
  }
};
