import { useMemo } from 'react';
import { useComponentPropsResolver } from '../../../hooks';
import type { IIconButtonProps } from './types';
import useIsPressed from '../../hooks/useIsPressed';
import useIsFocused from '../../hooks/useIsFocused';
import useIsHovered from '../../hooks/useIsHovered';

export const useIconButtonPropsResolver = ( props: Omit<IIconButtonProps, 'name'> ) => {
	const { disabled, testID } = props;
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
		as,
		size,
		color,
		__icon: iconRestProps,
		...containerProps
	} = useComponentPropsResolver( 'IconButton', props, state ) as Omit<IIconButtonProps, 'name'>;

	const iconTestID = testID ? `${testID}-icon` : undefined;
	const iconProps = useMemo( () => ( {
		as, size, color, testID: iconTestID, ...iconRestProps
	} ), [ as, size, color, iconTestID, iconRestProps ] );

	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;
	containerProps.onHoverIn = onHoverIn;
	containerProps.onHoverOut = onHoverOut;
	containerProps.onFocus = onFocus;
	containerProps.onBlur = onBlur;

	return { iconProps, containerProps };
};
