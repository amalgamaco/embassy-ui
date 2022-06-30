import { useMemo } from 'react';
import useIsPressed from '../../hooks/useIsPressed';
import { useComponentPropsResolver } from '../../../hooks';
import type { IButtonProps } from './types';

export const useButtonPropsResolver = ( props: Omit<IButtonProps, 'children'> ) => {
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
	} = useComponentPropsResolver( 'Button', props, state ) as IButtonProps;

	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;

	return { containerProps, stackProps, labelProps };
};
