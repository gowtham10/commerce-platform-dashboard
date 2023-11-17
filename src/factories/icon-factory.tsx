import { DefaultIconResolver } from './default-icon-resolver';
import { IconFactoryTypes } from './icon-factory-types';

function IconFactory<T extends IconFactoryTypes & { iconName: string }>(props: T) {

  return <DefaultIconResolver size={20} {...props} />;
}

export { IconFactory };

