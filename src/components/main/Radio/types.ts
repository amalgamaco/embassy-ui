import type { PressableProps, GestureResponderEvent } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';

export interface IRadioProps extends Omit<IPressableProps, 'children' | 'size' | 'variant' >,
ComponentStyledProps<'Radio'>{
	label?: string,
	value?: string,

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

export interface IRadioGroupProps {
	children?: JSX.Element | JSX.Element[] | string;
	value?: string,
	onChange?: ( selectedValue: string ) => void,
	disabled?: boolean
}

export interface IRadioGroupContext {
	disabled: boolean,
	selectedValue?: string,
	onRadioPress: ( value: string ) => void
}

export type IRadioGroupComponentType = (
	props: IRadioGroupProps
) => JSX.Element;

export type IRadioComponentType = ( (
	props: IRadioProps
 ) => JSX.Element ) & {
	Group: IRadioGroupComponentType
};
