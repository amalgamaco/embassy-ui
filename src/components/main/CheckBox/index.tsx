import React from 'react';
import Icon from '../Icon';
import Pressable from '../Pressable';
import { useCheckBoxPropsResolver } from './hooks';
import type { ICheckBoxProps } from './types';

const CheckBox = ( {
	isSelected = false,
	isIndeterminated = false,
	...props
}: ICheckBoxProps ) => {
	const { icon, iconProps, containerProps } = useCheckBoxPropsResolver( {
		isIndeterminated, isSelected, ...props
	} );

	return (
		<Pressable {...containerProps}>
			<Icon name={icon} {...containerProps} {...iconProps}></Icon>
		</Pressable>
	);
};

export default CheckBox;
