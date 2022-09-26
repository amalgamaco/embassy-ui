import { useComponentPropsResolver } from '../../../../hooks';
import type { IRadioProps } from '../types';
import type { IIconProps } from '../../Icon/types';
import type { IBoxProps } from '../../Box/types';
import type { ITextProps } from '../../Text/types';
import useRadioIcon from './useRadioIcon';
import useRadioAccessibilityProps from './useRadioAccessibilityProps';
import useRadioStateProps from './useRadioStateProps';

interface IUseRadioPropsResolverReturnType {
	icon: JSX.Element,
	iconProps?: Omit<IIconProps, 'name'>,
	iconContainerProps?: Omit<IBoxProps, 'children'>,
	labelProps?: Omit<ITextProps, 'children'>,
	containerProps: Omit<IRadioProps, '__icon'>
}

const useRadioPropsResolver = ( {
	label,
	selectedIcon,
	unselectedIcon,
	...props
} : IRadioProps ): IUseRadioPropsResolverReturnType => {
	const { state, stateProps } = useRadioStateProps( props );

	const {
		__icon: iconProps,
		__iconContainer: iconContainerProps,
		__label: labelProps,
		...containerProps
	} = useComponentPropsResolver( 'Radio', props, state ) as IRadioProps;

	const accessibilityProps = useRadioAccessibilityProps( {
		label,
		disabled: state.isDisabled,
		selected: state.isSelected
	} );

	Object.assign( containerProps, stateProps, accessibilityProps );

	const icon = useRadioIcon( {
		selected: state.isSelected,
		selectedIcon,
		unselectedIcon
	} );

	return {
		icon,
		iconProps,
		iconContainerProps,
		labelProps,
		containerProps
	};
};

export default useRadioPropsResolver;
