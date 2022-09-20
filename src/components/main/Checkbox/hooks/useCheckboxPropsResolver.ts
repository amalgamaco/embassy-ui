import { useMemo } from 'react';
import { useIsFocused, useIsHovered, useIsPressed } from '../../../hooks';
import { useComponentPropsResolver } from '../../../../hooks';
import type { ICheckboxProps } from '../types';
import type { IIconProps } from '../../Icon/types';
import type { IBoxProps } from '../../Box/types';
import type { ITextProps } from '../../Text/types';
import useCheckboxStateFromGroup from './useCheckboxStateFromGroup';
import useCheckboxIcon from './useCheckboxIcon';

interface IUseCheckboxPropsResolverReturnType {
	icon: JSX.Element,
	iconProps?: Omit<IIconProps, 'name'>,
	iconContainerProps?: Omit<IBoxProps, 'children'>,
	labelProps?: Omit<ITextProps, 'children'>,
	containerProps: Omit<ICheckboxProps, '__icon'>
}

const useCheckboxPropsResolver = ( {
	value,
	checkedIcon,
	uncheckedIcon,
	indeterminatedIcon,
	selected: selectedProp = false,
	indeterminated = false,
	onPress: onPressProp,
	...props
} : ICheckboxProps
): IUseCheckboxPropsResolverReturnType => {
	const { disabled } = props;
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered( props );
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	const groupState = useCheckboxStateFromGroup( value );
	const selected = groupState?.selected || selectedProp;
	const onPress = groupState?.onPress || onPressProp;

	const state = useMemo( () => ( {
		isSelected: selected,
		isIndeterminated: indeterminated,
		isDisabled: disabled || false,
		isPressed,
		isHovered,
		isFocused
	} ), [ selected, indeterminated, disabled, isPressed, isHovered, isFocused ] );

	const {
		__icon: iconProps,
		__iconContainer: iconContainerProps,
		__label: labelProps,
		...containerProps
	} = useComponentPropsResolver( 'Checkbox', props, state ) as ICheckboxProps;

	const icon = useCheckboxIcon( {
		selected,
		indeterminated,
		checkedIcon,
		uncheckedIcon,
		indeterminatedIcon
	} );

	containerProps.onPress = onPress;
	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;
	containerProps.onHoverIn = onHoverIn;
	containerProps.onHoverOut = onHoverOut;
	containerProps.onFocus = onFocus;
	containerProps.onBlur = onBlur;

	return {
		icon,
		iconProps,
		iconContainerProps,
		labelProps,
		containerProps
	};
};

export default useCheckboxPropsResolver;
