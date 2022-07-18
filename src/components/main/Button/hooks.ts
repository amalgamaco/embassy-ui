import { useMemo } from 'react';
import useIsPressed from '../../hooks/useIsPressed';
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
