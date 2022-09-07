import React from 'react';
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
		// Ver si ponerlo en un accessibility props
			accessible
			accessibilityRole='checkbox'
			accessibilityState={{
				checked: isIndeterminated ? 'mixed' : isSelected,
				disabled: props.disabled || false
			}}
		>
			<Icon {...iconProps}></Icon>
		</Pressable>
	);
};

export default Checkbox;
