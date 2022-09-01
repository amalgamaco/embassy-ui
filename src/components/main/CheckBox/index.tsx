import React from 'react';
import Icon from '../Icon';
import Pressable from '../Pressable';
import { useCheckboxPropsResolver } from './hooks';
import type { ICheckboxProps } from './types';

const Checkbox = ( {
	isSelected = false,
	isIndeterminated = false,
	...props
}: ICheckboxProps ) => {
	const { iconProps, containerProps } = useCheckboxPropsResolver( {
		isIndeterminated, isSelected, ...props
	} );

	return (
		<Pressable {...containerProps}>
			<Icon {...iconProps}></Icon>
		</Pressable>
	);
};

export default Checkbox;
