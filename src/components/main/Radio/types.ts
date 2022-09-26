import type { PressableProps, GestureResponderEvent } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';

export interface IRadioProps extends Omit<IPressableProps, 'children' | 'size' | 'variant' >,
ComponentStyledProps<'Radio'>{
	label?: string,

	selected?: boolean,
	disabled?: boolean,

	selectedIcon?: JSX.Element,
	unselectedIcon?: JSX.Element

	outlineStyle?: string,

	onPress?: PressableProps['onPress'],
	onPressOut?: PressableProps['onPressOut'],
	onPressIn?: PressableProps['onPressIn'],
	onFocus?: PressableProps['onFocus'],
	onBlur?: PressableProps['onBlur'],
	onHoverIn?: ( ( event: GestureResponderEvent ) => void ),
	onHoverOut?: ( ( event: GestureResponderEvent ) => void ),
}
