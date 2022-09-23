import { useMemo } from 'react';
import { useComponentPropsResolver } from '../../../hooks';
import type { IRadioProps } from './types';
import { useIsFocused, useIsHovered, useIsPressed } from '../../hooks';
import type { IIconButtonProps } from '../IconButton/types';

interface IUseRadioPropsResolverReturnType {
	iconProps: IRadioProps[ '__icon' ];
	restProps: Omit<IIconButtonProps, '__pressed' | 'size' >;
}

const useRadioPropsResolver = (
	{
		selectedIcon,
		unselectedIcon,
		...props
	} : IRadioProps ) : IUseRadioPropsResolverReturnType => {
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered( props );
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	const { selected = false, disabled, testID } = props;

	const state = useMemo( () => ( {
		isDisabled: disabled || false,
		isSelected: selected,
		isPressed,
		isHovered,
		isFocused
	} ), [ disabled, selected, isFocused, isHovered, isPressed ] );

	const {
		__icon: iconProps,
		...restProps
	} = useComponentPropsResolver( 'Radio', props, state ) as IIconButtonProps;

	const name = ( selected ? selectedIcon : unselectedIcon ) as string;

	return {
		iconProps: {
			...iconProps,
			testID: testID && `${testID.toString()}-icon`
		},
		restProps: {
			...restProps,
			name,
			onPressIn,
			onPressOut,
			onHoverIn,
			onHoverOut,
			onFocus,
			onBlur
		}
	};
};

export default useRadioPropsResolver;
