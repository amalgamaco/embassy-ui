import type { ComponentStyledProps } from '../theme/types';
import type { ComponentsConfig, ComponentName, VariantName } from './types';

export default class Components {
	private _config: ComponentsConfig;

	constructor( config: ComponentsConfig ) {
		this._config = config;
	}

	get config() { return this._config; }

	defaultPropsFor<C extends ComponentName>(
		componentName: C
	): ComponentStyledProps<C> | undefined {
		return this._config[ componentName ]?.defaultProps;
	}

	variantPropsFor<C extends ComponentName>(
		componentName: C,
		variantName: VariantName
	): ComponentStyledProps<C> | undefined {
		return this._config[ componentName ]?.variants?.[ variantName ];
	}
}
