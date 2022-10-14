import { useMemo } from 'react';
import { useIsPressed, useIsFocused, useIsHovered } from '../../hooks';
import type { IChipProps } from './types';
import { useComponentPropsResolver } from '../../../hooks';
import UIKitIcon from '../../../icons/UIKitIcon';

export const useChipPropsResolver = (
	{ onDeletePress, ...props }: Omit<IChipProps, 'label'>
) => {
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
		__deleteIcon: deleteIconThemeProps,
		...containerProps
	} = useComponentPropsResolver( 'Chip', props, state ) as IChipProps;

	containerProps.onPressIn = onPressIn;
	containerProps.onPressOut = onPressOut;
	containerProps.onHoverIn = onHoverIn;
	containerProps.onHoverOut = onHoverOut;
	containerProps.onFocus = onFocus;
	containerProps.onBlur = onBlur;

	const showDeleteIcon = !!onDeletePress;
	const deleteIconProps = {
		...deleteIconThemeProps,
		name: 'close-outlined',
		as: UIKitIcon,
		onPress: onDeletePress,
		disabled
	};

	return {
		containerProps,
		stackProps,
		labelProps,
		iconProps,
		showDeleteIcon,
		deleteIconProps
	};
};
