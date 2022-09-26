import React, { cloneElement } from 'react';
import Text from '../Text';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import { useCheckboxPropsResolver } from './hooks';
import type { ICheckboxProps } from './types';
import Box from '../Box';

const Checkbox = ( {
	label,
	selected = false,
	indeterminated = false,
	testID,
	...props
}: ICheckboxProps ) => {
	const {
		icon,
		iconProps,
		iconContainerProps,
		labelProps,
		containerProps
	} = useCheckboxPropsResolver( {
		label, indeterminated, selected, ...props
	} );

	return (
		<Pressable
			testID={testID}
			{...containerProps}
		>
			<HStack space="0.5" alignItems="center" alignContent="flex-start">
				<Box {...iconContainerProps}>
					{cloneElement( icon, {
						...iconProps,
						testID: testID && `${testID}-icon`
					} )}
				</Box>
				{!!label && (
					<Text
						{...labelProps}
						selectable={false}
						testID={testID && `${testID}-label`}
					>
						{label}
					</Text>
				)}
			</HStack>
		</Pressable>
	);
};

export default Checkbox;
