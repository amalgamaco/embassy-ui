import { useMemo } from 'react';
import { useIsPressed, useIsFocused, useIsHovered } from '../../hooks';
import type { IChipProps } from './types';
import { useComponentPropsResolver } from '../../../hooks';

export const useChipPropsResolver = ( props: Omit<IChipProps, 'label'> ) => {
	const { disabled, selected } = props;
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered( props );
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	const state = useMemo( () => ( {
		isDisabled: disabled || false,
		isSelected: selected || false,
		isPressed,
		isHovered,
		isFocused
	} ), [ disabled, selected, isPressed, isHovered, isFocused ] );

	const {
		__stack: stackProps,
		__label: labelProps,
		__icon: iconProps,
		...containerProps
	} = useComponentPropsResolver( 'Chip', props, state ) as IChipProps;

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
		iconProps
	};
};
