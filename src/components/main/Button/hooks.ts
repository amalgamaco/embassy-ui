import { useMemo } from 'react';
import useIsPressed from '../../hooks/useIsPressed';
import { useTheme } from '../../../core/theme/hooks';
import type { IButtonProps } from './types';

export const useButtonPropsResolver = ( props: Omit<IButtonProps, 'children'> ) => {
	const theme = useTheme();

	const { disabled } = props;
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );

	const state = useMemo( () => ( {
		isDisabled: disabled || false,
		isPressed
	} ), [ disabled, isPressed ] );

	const {
		__label: labelProps,
		__stack: stackProps,
		...containerProps
	} = useMemo<IButtonProps>( () => (
		theme?.resolvePropsFor( 'Button', props, state ) || {}
	), [ theme, props, state ] );

	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;

	return { containerProps, stackProps, labelProps };
};
