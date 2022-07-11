// Components custom props types
// ----------------------------
// Here we define the custom props types for each component in the theme.
// The components custom props are special props that we want to be availble when
// defining the default or variant props for a component in the theme's config
// but that are not common to all the components.
import type { ComponentName } from './common';

// Icon
interface IconCustomProps { as?: any }

// Pseudoprops config for all components
interface ComponentsCustomPropsConfig {
	Icon: IconCustomProps
}

// Template type to get pseudoprops for a given component
/* eslint-disable @typescript-eslint/ban-types */
export type ComponentCustomProps<C extends ComponentName> =
	C extends keyof ComponentsCustomPropsConfig
		? ComponentsCustomPropsConfig[C]
		: {};
/* eslint-enable @typescript-eslint/ban-types */