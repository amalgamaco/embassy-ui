import type Immutable from 'immutable';
import type { GestureResponderEvent, PressableProps } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

export interface ICheckboxProps extends Omit<PressableProps, 'children'>,
	ComponentStyledProps<'Checkbox'>
{
	label?: string,
	value?: string,

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

export interface ICheckboxGroupProps {
	children?: JSX.Element | JSX.Element[] | string | any;
	value?: string[],
	onChange?: ( selectedValues: string[] ) => void,
	disabled?: boolean
}

export interface ICheckboxContext {
	disabled: boolean,
	selectedValues: Immutable.Set<string>,
	onCheckboxPress: ( value: string ) => void
}

export type ICheckboxGroupComponentType = (
	props: ICheckboxGroupProps
) => JSX.Element;

export type ICheckboxComponentType = ( (
	props: ICheckboxProps
 ) => JSX.Element ) & {
	Group: ICheckboxGroupComponentType
 };
