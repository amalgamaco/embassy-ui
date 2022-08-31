import { useMemo } from 'react';
import useIsPressed from '../../hooks/useIsPressed';
import { useComponentPropsResolver } from '../../../hooks';
import useIsSelected from '../../hooks/useIsSelected';
import type { ICheckBoxProps } from './types';

interface IUseCheckBoxPropsResolverReturnType {
	iconProps: ICheckBoxProps['__icon'],
    containerProps: Omit<ICheckBoxProps, '__icon'>
	icon: string
}

// Poner esto en otro lado
const selectIcon = ( isIndeterminated: boolean, isSelected: boolean ): string => {
	if ( isIndeterminated ) return 'customindeterminatedbox';
	if ( isSelected ) return 'customcheckedbox';
	return 'customuncheckedbox';
};

export const useCheckBoxPropsResolver = ( {
	isSelected: isSelectedProp = false,
	isIndeterminated: isIndeterminatedProp = false,
	...props
} : ICheckBoxProps
): IUseCheckBoxPropsResolverReturnType => {
	const { disabled } = props;

	const {
		isSelected,
		isIndeterminated,
		onPress
	} = useIsSelected( { isSelectedProp, isIndeterminatedProp, props } );

	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );

	const state = useMemo( () => ( {
		isSelected,
		isUnselected: !isSelected,
		isIndeterminated,
		isDisabled: disabled || false,
		isPressed
	} ), [ isSelected, isIndeterminated, disabled, isPressed ] );

	const icon = selectIcon( isIndeterminated, isSelected );

	const {
		__icon: iconProps,
		...containerProps
	} = useComponentPropsResolver( 'CheckBox', props, state ) as ICheckBoxProps;

	containerProps.onPress = onPress;
	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;

	return { icon, iconProps, containerProps };
};
