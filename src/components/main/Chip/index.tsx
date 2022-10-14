import React, { forwardRef, memo } from 'react';
import type { View } from 'react-native';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import Text from '../Text';
import { useChipPropsResolver } from './hooks';
import type { IChipProps } from './types';
import { cloneElement, ComponentType, createComponent } from '../../utils/elements';
import IconButton from '../IconButton';
import type { IIconButtonProps } from '../IconButton/types';

const Chip = ( {
	label,
	testID,
	icon: iconProp,
	deleteIcon: deleteIconProp,
	...props
}: IChipProps, ref?: React.Ref<View> ) => {
	const {
		containerProps,
		stackProps,
		labelProps,
		iconProps,
		showDeleteIcon,
		deleteIconProps
	} = useChipPropsResolver( props );

	const icon = cloneElement( iconProp, iconProps || {} );
	const deleteIcon = showDeleteIcon
		? createComponent(
			IconButton as ComponentType<IIconButtonProps>,
			{
				from: deleteIconProp,
				props: {
					testID: testID ? `${testID}-delete-icon` : undefined,
					...deleteIconProps
				}
			}
		) : null;

	return (
		<Pressable
			{...containerProps}
			testID={testID}
			ref={ref}
		>
			<HStack {...stackProps}>
				<>{icon}</>
				<Text
					{...labelProps}
					testID={testID ? `${testID}-label` : undefined}
				>
					{label}
				</Text>
				<>{deleteIcon}</>
			</HStack>
		</Pressable>
	);
};

export default memo( forwardRef( Chip ) );
