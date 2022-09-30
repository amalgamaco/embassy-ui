import { useComponentPropsResolver } from '../../../../hooks';
import type { ICheckboxProps } from '../types';
import type { IIconProps } from '../../Icon/types';
import type { IBoxProps } from '../../Box/types';
import type { ITextProps } from '../../Text/types';
import useCheckboxIcon from './useCheckboxIcon';
import useCheckboxAccessibilityProps from './useCheckboxAccesbilityProps';
import useCheckboxStateProps from './useCheckboxStateProps';

interface IUseCheckboxPropsResolverReturnType {
	icon: JSX.Element,
	iconProps?: Omit<IIconProps, 'name'>,
	iconContainerProps?: Omit<IBoxProps, 'children'>,
	labelProps?: Omit<ITextProps, 'children'>,
	containerProps: Omit<ICheckboxProps, '__icon'>
}

const useCheckboxPropsResolver = ( {
	label,
	checkedIcon,
	uncheckedIcon,
	indeterminatedIcon,
	...props
}: ICheckboxProps
): IUseCheckboxPropsResolverReturnType => {
	const { state, stateProps } = useCheckboxStateProps( props );

	const {
		__icon: iconProps,
		__iconContainer: iconContainerProps,
		__label: labelProps,
		...containerProps
	} = useComponentPropsResolver( 'Checkbox', props, state ) as ICheckboxProps;

	const accessibilityProps = useCheckboxAccessibilityProps( {
		label,
		disabled: state.isDisabled,
		selected: state.isSelected,
		indeterminated: state.isIndeterminated
	} );

	Object.assign( containerProps, stateProps, accessibilityProps );

	const icon = useCheckboxIcon( {
		selected: state.isSelected,
		indeterminated: state.isIndeterminated,
		checkedIcon,
		uncheckedIcon,
		indeterminatedIcon
	} );

	return {
		icon,
		iconProps,
		iconContainerProps,
		labelProps,
		containerProps
	};
};

export default useCheckboxPropsResolver;
