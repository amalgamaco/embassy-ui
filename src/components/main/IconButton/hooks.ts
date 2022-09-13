import { useMemo } from 'react';
import useIsPressed from '../../hooks/useIsPressed';
import { useComponentPropsResolver } from '../../../hooks';
import type { IIconButtonProps } from './types';

export const useIconButtonPropsResolver = ( props: Omit<IIconButtonProps, 'name'> ) => {
	const { disabled } = props;
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );

	const state = useMemo( () => ( {
		isDisabled: disabled || false,
		isPressed
	} ), [ disabled, isPressed ] );

	const {
		as,
		size,
		color,
		__icon: iconRestProps,
		...containerProps
	} = useComponentPropsResolver( 'IconButton', props, state ) as Omit<IIconButtonProps, 'name'>;

	const iconProps = useMemo( () => ( {
		as, size, color, ...iconRestProps
	} ), [ as, size, color, iconRestProps ] );

	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;

	return { iconProps, containerProps };
};
