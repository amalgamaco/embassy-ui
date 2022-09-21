import { useMemo } from 'react';
import { useComponentPropsResolver } from '../../../hooks';
import type { IRadioButtonProps } from './types';
import { useIsFocused, useIsHovered, useIsPressed } from '../../hooks';
import type { IIconButtonProps } from '../IconButton/types';

interface IUseRadioButtonPropsResolverReturnType {
	iconProps: IRadioButtonProps[ '__icon' ];
	restProps: Omit<IIconButtonProps, '__pressed' | 'size' >;
}

const useRadioButtonPropsResolver = (
	{
		selectedIcon,
		unselectedIcon,
		...props
	} : IRadioButtonProps ) : IUseRadioButtonPropsResolverReturnType => {
	const { isPressed, onPressIn, onPressOut } = useIsPressed( props );
	const { isHovered, onHoverIn, onHoverOut } = useIsHovered( props );
	const { isFocused, onFocus, onBlur } = useIsFocused( props );

	const { selected, disabled, testID } = props;
	const state = useMemo( () => ( {
		isDisabled: !!disabled,
		isSelected: !!selected,
		isPressed,
		isHovered,
		isFocused
	} ), [ disabled, selected, isFocused, isHovered, isPressed ] );

	const {
		__icon: iconProps,
		...restProps
	} = useComponentPropsResolver( 'RadioButton', props, state ) as IIconButtonProps;
	const name = ( props.selected ? selectedIcon : unselectedIcon ) as string;

	const iconPropsWithTestId = { ...iconProps, testID: !!testID && `${testID}-icon` };

	return {
		iconProps: iconPropsWithTestId,
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

export default useRadioButtonPropsResolver;
