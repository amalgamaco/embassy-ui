// Components config types
// ----------------------------
// Here we define the config types for the theme's components. This types
// represents the configuration for a component in the theme's configuration.
// {
// 	defaultProps: {
// 		color: 'black',
// 		bg: 'white'
// 	},
// 	variant: {
// 		primary: {
// 			color: 'primary.100',
// 			bg: 'secondary.200'
// 		}
// 	},
// 	sizes: {
// 		'sm': 10,
// 		'md': 16,
// 		'lg': 20
// 	}
// }
import type { ComponentStyledProps } from './styledProps';
import type { ComponentName, VariantName } from './common';

export type ComponentConfig<C extends ComponentName> = Partial<{
	defaultProps: ComponentStyledProps<C>,
	variants: Record<VariantName, Omit<ComponentStyledProps<C>, 'variant'>>
	sizes?: Record<string, string | number>
}>;

export type ComponentsConfig = Partial<{
	[ C in ComponentName ]: ComponentConfig<C>
}>;
