import { useMemo } from 'react';
import useIsPressed from '../../hooks/useIsPressed';
import { useComponentPropsResolver } from '../../../hooks';
import type { IButtonProps } from './types';

export const useButtonPropsResolver = ( props: Omit<IButtonProps, 'children' | 'leftIcon' | 'rightIcon'> ) => {
	const { disabled } = props;
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );

	const state = useMemo( () => ( {
		isDisabled: disabled || false,
		isPressed
	} ), [ disabled, isPressed ] );

	const {
		__label: labelProps,
		__leftIcon: leftIconProps,
		__rightIcon: rightIconProps,
		__stack: stackProps,
		...containerProps
	} = useComponentPropsResolver( 'Button', props, state ) as Omit<IButtonProps, 'leftIcon' | 'rightIcon'>;

	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;

	return {
		containerProps,
		stackProps,
		labelProps,
		leftIconProps,
		rightIconProps
	};
};
