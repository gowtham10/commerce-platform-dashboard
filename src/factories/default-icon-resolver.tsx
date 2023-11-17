import { DynamicLoaderKeys } from '../constants';
import useLazy from '../hooks/useLazy';
import { DefaultIconTypeProps } from './icon-factory-types';

function DefaultIconResolver<T extends DefaultIconTypeProps & { iconName: string }>(props: T) {
  const { iconName, width, height, ...rest } = props;
  const Icon = useLazy<T>(DynamicLoaderKeys.ICONS, iconName) as React.ComponentType<DefaultIconTypeProps>;
  return <Icon width={width || 24} height={height || 24} {...rest} />;
}

export { DefaultIconResolver };

