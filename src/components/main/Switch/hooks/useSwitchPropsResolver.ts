import { useComponentPropsResolver } from '../../../../hooks';
import type { IBoxProps } from '../../Box/types';
import type { IIconProps } from '../../Icon/types';
import type { ISwitchProps } from '../types';
import useSwitchStateProps from '../useSwitchStateProps';
import useSwitchAccessibilityProps from './useSwitchAccessibilityProps';
import useSwitchIcon from './useSwitchIcon';

interface IUseSwitchPropsResolverProps extends Omit<ISwitchProps, 'initialValue' >{
selected: boolean;
disabled?: boolean;
}

interface IUseSwitchPropsResolverReturnType {
	icon: JSX.Element,
	iconProps?: Omit<IIconProps, 'name'>,
	iconContainerProps?: Omit<IBoxProps, 'children'>,
	switchContainerProps?: Omit<IBoxProps, 'children'>,
	containerProps: Omit<IBoxProps, 'children'>
}

const useSwitchPropsResolver = (
	props: IUseSwitchPropsResolverProps
): IUseSwitchPropsResolverReturnType => {
	const { onIcon, offIcon } = props;
	const { state, stateProps } = useSwitchStateProps( props );
	const {
		__switchContainer: switchContainerProps,
		__iconContainer: iconContainerProps,
		__icon: iconProps,
		...containerProps
	} = useComponentPropsResolver( 'Switch', props, state );

	const icon = useSwitchIcon( {
		on: state.isSelected,
		onIcon,
		offIcon
	} );

	const accessibilityProps = useSwitchAccessibilityProps( {
		disabled: state.isDisabled,
		selected: state.isSelected
	} );

	Object.assign( containerProps, stateProps, accessibilityProps );

	return {
		icon,
		containerProps,
		iconContainerProps,
		iconProps,
		switchContainerProps
	};
};

export default useSwitchPropsResolver;
