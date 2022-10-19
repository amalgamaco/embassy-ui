import { cloneDeep, merge } from 'lodash';
import type { ColorMode } from '../types';
import type {
	ComponentsConfig, ComponentName, VariantName, ComponentState,
	ComponentConfig, PropsWithVariant, ComponentStateKey,
	ComponentStyledProps
} from './types';
import { COMPONENT_COLOR_MODE_PROPS_MAP } from './types/colorModeProps';

import { COMPONENT_STATE_PROPS_MAP } from './types/state';

export default class Components {
	private _config: ComponentsConfig;

	constructor( config: ComponentsConfig ) {
		this._config = config;
	}

	get config() { return this._config; }

	resolvePropsFor<C extends ComponentName>(
		componentName: C,
		{ variant, ...props }: PropsWithVariant,
		colorMode: ColorMode,
		state: ComponentState = {}
	): ComponentStyledProps<C> {
		const defaultProps = this
			.defaultPropsFor( componentName ) || {};

		const variantProps = (
			variant ? this.variantPropsFor( componentName, variant ) : undefined
		) || {};

		const resolvedProps: ComponentStyledProps<C> = merge(
			{} as ComponentStyledProps<C>,
			this.applyColorModeProps( cloneDeep( defaultProps ), colorMode ),
			this.applyColorModeProps( cloneDeep( variantProps ), colorMode ),
			this.applyColorModeProps( props, colorMode )
		);

		return this.applyStateProps( resolvedProps, state );
	}

	defaultPropsFor<C extends ComponentName>(
		componentName: C
	): ComponentStyledProps<C> | undefined {
		return this.configFor( componentName )?.defaultProps;
	}

	variantPropsFor<C extends ComponentName>(
		componentName: C,
		variantName: VariantName
	): Omit<ComponentStyledProps<C>, 'variant'> | undefined {
		return this.configFor( componentName )?.variants?.[ variantName ];
	}

	sizeFor<C extends ComponentName>(
		componentName: C,
		alias: string | number
	): string | number | undefined {
		return this.configFor( componentName )?.sizes?.[ alias ];
	}

	// eslint-disable-next-line class-methods-use-this
	private applyColorModeProps<C extends ComponentName>(
		props: ComponentStyledProps<C>,
		colorMode: ColorMode
	): ComponentStyledProps<C> {
		const currentColorModeProp = COMPONENT_COLOR_MODE_PROPS_MAP[ colorMode ];
		const propsForColorMode = props[ currentColorModeProp ] || {};

		Object.values( COMPONENT_COLOR_MODE_PROPS_MAP ).forEach(
			( colorModeProp ) => { delete props[ colorModeProp ]; }
		);

		return merge( props, propsForColorMode );
	}

	// eslint-disable-next-line class-methods-use-this
	private applyStateProps<C extends ComponentName>(
		props: ComponentStyledProps<C>,
		state: ComponentState = {}
	): ComponentStyledProps<C> {
		const stateProps = (
			Object.keys( COMPONENT_STATE_PROPS_MAP ) as ComponentStateKey[]
		).reduce(
			( result, stateKey ) => {
				const stateProp = COMPONENT_STATE_PROPS_MAP[ stateKey ];
				const propsForState = props[ stateProp ] || {};
				delete props[ stateProp ];

				return state[ stateKey ] && !!propsForState
					? merge( result, propsForState )
					: result;
			},
			{}
		);

		return merge( props, stateProps );
	}

	private configFor<C extends ComponentName>(
		componentName: C
	): ComponentConfig<C> | undefined {
		return this._config[ componentName ];
	}
}
