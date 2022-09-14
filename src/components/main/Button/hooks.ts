import { useMemo } from 'react';
import { useIsPressed, useIsFocused, useIsHovered } from '../../hooks';
import { useComponentPropsResolver } from '../../../hooks';
import type { IButtonProps } from './types';

interface IUseButtonPropsResolverReturnType {
	labelProps: IButtonProps[ '__label' ],
	stackProps: IButtonProps[ '__stack' ],
	leftIconProps: IButtonProps[ '__leftIcon' ],
	rightIconProps: IButtonProps[ '__rightIcon' ],
	containerProps: Omit<IButtonProps, 'leftIcon' | 'rightIcon' | '__label' | '__rightIcon' | '__leftIcon' | '__stack'>
}

export const useButtonPropsResolver = (
	props: Omit<IButtonProps, 'children' | 'leftIcon' | 'rightIcon'>
): IUseButtonPropsResolverReturnType => {
	const { disabled } = props;
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered( props );
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	const state = useMemo( () => ( {
		isDisabled: disabled || false,
		isPressed,
		isHovered,
		isFocused
	} ), [ disabled, isPressed, isHovered, isFocused ] );

	const {
		__label: labelProps,
		__leftIcon: leftIconProps,
		__rightIcon: rightIconProps,
		__stack: stackProps,
		...containerProps
	} = useComponentPropsResolver( 'Button', props, state ) as Omit<IButtonProps, 'leftIcon' | 'rightIcon'>;

	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;
	containerProps.onHoverIn = onHoverIn;
	containerProps.onHoverOut = onHoverOut;
	containerProps.onFocus = onFocus;
	containerProps.onBlur = onBlur;

	return {
		containerProps,
		stackProps,
		labelProps,
		leftIconProps,
		rightIconProps
	};
};
