// Components color mode props types
// ----------------------------
// Here we define the color mode pseudoprops types for all components in the theme.
// The components color mode pseudoprops are props that overwrite the components
// default, variant or directly set props when the component is at a specific
// color mode, e.g. you can use the __dark color mode pseudo prop to specify the value
// for any styled prop (and internal components styled props using pseudoprops)
// to the value it should be when the color mode is dark.
// {
//   bg: 'black',
//   mx: '2',
//   radius: 'xs',
//   __label: {
//     color: 'white',
//     fontSize: 'xl'
//   },
//   __dark: {
//     bg: 'primary.200',
//     __label: {
//       'color': 'black'
//     }
//   },
// }
import type { ValueOf } from '../../types';

export const COMPONENT_COLOR_MODE_PROPS_MAP = {
	'light': '__light',
	'dark': '__dark'
} as const;

export type ComponentColorModeProp = ValueOf<typeof COMPONENT_COLOR_MODE_PROPS_MAP>;
