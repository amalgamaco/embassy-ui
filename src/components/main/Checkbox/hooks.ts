import { useMemo } from 'react';
import useIsPressed from '../../hooks/useIsPressed';
import { useComponentPropsResolver } from '../../../hooks';
import type { ICheckboxProps } from './types';
import type { IIconProps } from '../Icon/types';

interface IUseCheckboxPropsResolverReturnType {
	iconProps: IIconProps,
    containerProps: Omit<ICheckboxProps, '__icon'>
}

// Poner esto en otro lado
const selectIcon = ( isIndeterminated: boolean, isSelected: boolean ): string => {
	if ( isIndeterminated ) return 'customindeterminatedbox';
	if ( isSelected ) return 'customcheckedbox';
	return 'customuncheckedbox';
};

export const useCheckboxPropsResolver = ( {
	isSelected = false,
	isIndeterminated = false,
	onChange = undefined,
	...props
} : ICheckboxProps
): IUseCheckboxPropsResolverReturnType => {
	const { disabled } = props;

	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );

	const state = useMemo( () => ( {
		isSelected,
		isUnselected: !isSelected,
		isIndeterminated,
		isDisabled: disabled || false,
		isPressed
	} ), [ isSelected, isIndeterminated, disabled, isPressed ] );

	const name = selectIcon( isIndeterminated, isSelected );

	const {
		__icon: iconProps,
		...containerProps
	} = useComponentPropsResolver( 'Checkbox', props, state ) as ICheckboxProps;

	if ( onChange ) containerProps.onPress = onChange;
	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;

	return { iconProps: { ...iconProps, name }, containerProps };
};
