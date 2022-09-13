import React, { cloneElement } from 'react';
import UIKitIcon from '../../../icons/UIKitIcon';
import Icon from '../Icon';
import Pressable from '../Pressable';
import { useCheckboxPropsResolver } from './hooks';
import type { ICheckboxProps } from './types';

const defaultCheckedIcon = <Icon as={UIKitIcon} name="box-checked" />;

const defaultUncheckedIcon = <Icon as={UIKitIcon} name="box-unchecked" />;

const defaultIndeterminatedIcon = <Icon as={UIKitIcon} name="box-indeterminated" />;

const selectIcon = ( isSelected: boolean, isIndeterminated: boolean, checkedIcon: JSX.Element,
	uncheckedIcon: JSX.Element, indeterminatedIcon: JSX.Element ) => {
	if ( isIndeterminated ) return indeterminatedIcon;
	if ( isSelected ) return checkedIcon;
	return uncheckedIcon;
};

const Checkbox = ( {
	isSelected = false,
	isIndeterminated = false,
	checkedIcon = defaultCheckedIcon,
	uncheckedIcon = defaultUncheckedIcon,
	indeterminatedIcon = defaultIndeterminatedIcon,
	...props
}: Omit<ICheckboxProps, 'onPress' | 'onPressIn' | 'onPressOut'> ) => {
	const { iconProps, containerProps } = useCheckboxPropsResolver( {
		isIndeterminated, isSelected, ...props
	} );

	const icon = selectIcon(
		isSelected,
		isIndeterminated,
		checkedIcon,
		uncheckedIcon,
		indeterminatedIcon );

	return (
		<Pressable {...containerProps}
		// Ver si ponerlo en un accessibility props
			accessible
			accessibilityRole='checkbox'
			accessibilityState={{
				checked: isIndeterminated ? 'mixed' : isSelected,
				disabled: props.disabled || false
			}}
		>
			{cloneElement( icon, iconProps )}
		</Pressable>
	);
};

export default Checkbox;
