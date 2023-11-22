import useLazy from "@/hooks/useLazy";
import { IconFactoryTypes } from "./factory.interface";
import { DynamicLoaderKeys } from "@/constants";

function IconFactory<T extends IconFactoryTypes & { iconName: string }>(
  props: T,
) {
  const { iconName, width, height, iconClass, ...rest } = props;
  const Icon = useLazy<T>(
    DynamicLoaderKeys.ICONS,
    iconName,
  ) as React.ComponentType<any>;
  return (
    <Icon
      className={iconClass}
      width={width || 20}
      height={height || 20}
      {...rest}
    />
  );
}

export { IconFactory };
