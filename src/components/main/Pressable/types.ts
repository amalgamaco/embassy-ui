import type { GestureResponderEvent, PressableProps } from 'react-native';
import type { ComponentBaseStyledProps } from '../../../core/components/types';

export interface IPressableProps extends PressableProps, ComponentBaseStyledProps<'Pressable'> {
	children?: PressableProps[ 'children' ],
	onHoverIn?: ( ( event: GestureResponderEvent ) => void ),
	onHoverOut?: ( ( event: GestureResponderEvent ) => void ),
}
