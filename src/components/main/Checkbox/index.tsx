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
}: ICheckboxProps ) => {
	const { iconProps, containerProps } = useCheckboxPropsResolver( {
		isIndeterminated, isSelected, onChange, ...props
	} );

	return (
		<Pressable {...containerProps}>
			<Icon {...iconProps}></Icon>
		</Pressable>
	);
};

export default Checkbox;
