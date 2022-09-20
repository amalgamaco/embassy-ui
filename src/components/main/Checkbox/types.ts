import type { GestureResponderEvent, PressableProps } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

export interface ICheckboxProps extends Omit<PressableProps, 'children'>,
	ComponentStyledProps<'Checkbox'>
{
	label?: string,

	selected?: boolean,
	indeterminated?: boolean,
	disabled?: boolean,

	checkedIcon?: JSX.Element,
	uncheckedIcon?: JSX.Element,
	indeterminatedIcon?: JSX.Element

	outlineStyle?: string,

	onPress?: PressableProps['onPress'],
	onPressOut?: PressableProps['onPressOut'],
	onPressIn?: PressableProps['onPressIn'],
	onFocus?: PressableProps['onFocus'],
	onBlur?: PressableProps['onBlur'],
	onHoverIn?: ( ( event: GestureResponderEvent ) => void ),
	onHoverOut?: ( ( event: GestureResponderEvent ) => void ),
}
