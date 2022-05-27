import type { StyledProps } from '../theme/types';
import type { ComponentsConfig, ComponentName, VariantName } from './types';

export default class Components {
	private _config: ComponentsConfig;

	constructor( config: ComponentsConfig ) {
		this._config = config;
	}

	get config() { return this._config; }

	defaultPropsFor( componentName: ComponentName ): StyledProps | undefined {
		return this._config[ componentName ]?.defaultProps;
	}

	variantPropsFor(
		componentName: ComponentName, variantName: VariantName
	): StyledProps | undefined {
		return this._config[ componentName ]?.variants?.[ variantName ];
	}
}
