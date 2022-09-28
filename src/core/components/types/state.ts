// Components state props types
// ----------------------------
// Here we define the state pseudoprops types for all components in the theme.
// The components state pseudoprops are props that overwrite the components
// default, variant or directly set props when the component is at a specific
// state, e.g. you can use the __disabled state pseudo prop to specify the value
// for any styled prop (and internal components styled props using pseudoprops)
// to the value it should be when the component is dissabled.
// {
// 	bg: 'black',
// 	mx: '2',
// 	radius: 'xs',
// 	__label: {
// 		color: 'white',
// 		fontSize: 'xl'
// 	},
// 	__disabled: {
// 		opacity: 0.7,
// 		__label: {
// 			'color': 'primary.700'
// 		}
// 	},
// }
import type { GestureResponderEvent } from 'react-native';
import type { ValueOf } from '../../types';

export const COMPONENT_STATE_PROPS_MAP = {
	'isPressed': '__pressed',
	'isSelected': '__selected',
	'isIndeterminated': '__indeterminated',
	'isHovered': '__hovered',
	'isDisabled': '__disabled',
	'isFocused': '__focused',
	'hasError': '__error'
} as const;

export type ComponentStateKey = keyof typeof COMPONENT_STATE_PROPS_MAP;
export type ComponentStateProp = ValueOf<typeof COMPONENT_STATE_PROPS_MAP>;
export type ComponentState = Partial<Record<ComponentStateKey, boolean>>;

export type IHoverableComponent = {
	onHoverIn?: ( ( event: GestureResponderEvent ) => void ),
	onHoverOut?: ( ( event: GestureResponderEvent ) => void )
}
