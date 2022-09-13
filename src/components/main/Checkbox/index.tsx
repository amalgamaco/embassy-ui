import React from 'react';
import UIKitIcon from '../../../icons/UIKitIcon';
import Icon from '../Icon';
import Pressable from '../Pressable';
import { useCheckboxPropsResolver } from './hooks';
import type { ICheckboxProps } from './types';

const Checkbox = ( {
	isSelected = false,
	isIndeterminated = false,
	onChange = undefined,
	...props
}: Omit<ICheckboxProps, 'onPress' | 'onPressIn' | 'onPressOut'> ) => {
	const { iconProps, containerProps } = useCheckboxPropsResolver( {
		isIndeterminated, isSelected, onChange, ...props
	} );
	return (
		<Pressable {...containerProps}
			accessible
			accessibilityRole='checkbox'
			accessibilityState={{
				checked: isIndeterminated ? 'mixed' : isSelected,
				disabled: props.disabled || false
			}}
		>
			<Icon as={UIKitIcon} {...iconProps} />
		</Pressable>
	);
};

export default Checkbox;
