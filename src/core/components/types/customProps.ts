// Components custom props types
// ----------------------------
// Here we define the custom props types for each component in the theme.
// The components custom props are special props that we want to be availble when
// defining the default or variant props for a component in the theme's config
// but that are not common to all the components.
import type { ComponentName } from './common';

// Icon
interface IconCustomProps {
	as?: any
}

// IconButton
interface IconButtonCustomProps {
	as?: any
}
// RadioButton
interface RadioButtonCustomProps {
	as?: any
}

// Stack
interface StackCustomProps {
	space?: string | number
	direction?: string
	reversed?: boolean
}

// Pseudoprops config for all components
interface ComponentsCustomPropsConfig {
	Icon: IconCustomProps,
	IconButton: IconButtonCustomProps,
	RadioButton: RadioButtonCustomProps,
	Stack: StackCustomProps
}

// Template type to get pseudoprops for a given component
/* eslint-disable @typescript-eslint/ban-types */
export type ComponentCustomProps<C extends ComponentName> =
	C extends keyof ComponentsCustomPropsConfig
		? ComponentsCustomPropsConfig[C]
		: {};
/* eslint-enable @typescript-eslint/ban-types */
