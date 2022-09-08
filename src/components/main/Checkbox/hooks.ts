import { useMemo } from 'react';
import useIsFocused from '../../hooks/useIsFocused';
import useIsHovered from '../../hooks/useIsHovered';
import useIsPressed from '../../hooks/useIsPressed';
import { useComponentPropsResolver } from '../../../hooks';
import type { ICheckboxProps } from './types';
import type { IIconProps } from '../Icon/types';

interface IUseCheckboxPropsResolverReturnType {
	iconProps: IIconProps,
    containerProps: Omit<ICheckboxProps, '__icon'>
}

const selectIcon = ( isIndeterminated: boolean, isSelected: boolean ): string => {
	if ( isIndeterminated ) return 'box-indeterminated';
	if ( isSelected ) return 'box-checked';
	return 'box-unchecked';
};

export const useCheckboxPropsResolver = ( {
	isSelected = false,
	isIndeterminated = false,
	onChange,
	...props
} : ICheckboxProps
): IUseCheckboxPropsResolverReturnType => {
	const { disabled } = props;

	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered();
	const { isFocused, onFocus, onBlur } = useIsFocused();

	const state = useMemo( () => ( {
		isSelected,
		isIndeterminated,
		isDisabled: disabled || false,
		isPressed,
		isHovered,
		isFocused
	} ), [ isSelected, isIndeterminated, disabled, isPressed, isHovered, isFocused ] );

	const name = selectIcon( isIndeterminated, isSelected );

	const {
		__icon: iconProps,
		...containerProps
	} = useComponentPropsResolver( 'Checkbox', props, state ) as ICheckboxProps;

	containerProps.onPress = onChange;
	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;
	containerProps.onHoverIn = onHoverIn;
	containerProps.onHoverOut = onHoverOut;
	containerProps.onFocus = onFocus;
	containerProps.onBlur = onBlur;

	return { iconProps: { ...iconProps, name }, containerProps };
};
