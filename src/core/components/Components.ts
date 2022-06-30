import { merge } from 'lodash';
import type { ComponentStyledProps } from '../theme/types';
import {
	ComponentsConfig, ComponentName, VariantName, ComponentState,
	ComponentConfig, PropsWithVariant, COMPONENT_STATE_PROPS_MAP, ComponentStateKey
} from './types';

export default class Components {
	private _config: ComponentsConfig;

	constructor( config: ComponentsConfig ) {
		this._config = config;
	}

	get config() { return this._config; }

	resolvePropsFor<C extends ComponentName>(
		componentName: C,
		{ variant, ...props }: PropsWithVariant,
		state: ComponentState = {}
	): ComponentStyledProps<C> {
		const defaultProps: ComponentStyledProps<C> = this
			.defaultPropsFor( componentName ) || {};

		const variantProps: ComponentStyledProps<C> = (
			variant ? this.variantPropsFor( componentName, variant ) : undefined
		) || {};

		const resolvedProps: ComponentStyledProps<C> = merge(
			{}, defaultProps, variantProps, props
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
	): ComponentStyledProps<C> | undefined {
		return this.configFor( componentName )?.variants?.[ variantName ];
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
				const propsForState = props[ stateProp ];
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
