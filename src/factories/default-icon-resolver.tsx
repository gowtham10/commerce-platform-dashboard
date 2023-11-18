import { DynamicLoaderKeys } from '../constants';
import useLazy from '../hooks/useLazy';
import { DefaultIconTypeProps } from './icon-factory-types';

function DefaultIconResolver<T extends DefaultIconTypeProps & { iconName: string }>(props: T) {
  const { iconName, width, height, iconClass, ...rest } = props;
  const Icon = useLazy<T>(DynamicLoaderKeys.ICONS, iconName) as React.ComponentType<DefaultIconTypeProps>;
  return <Icon className={iconClass} width={width || 20} height={height || 20} {...rest} />;
}

export { DefaultIconResolver };

