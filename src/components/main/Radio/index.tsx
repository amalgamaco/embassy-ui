import React, { cloneElement, forwardRef, memo } from 'react';
import Text from '../Text';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import { useRadioPropsResolver } from './hooks';
import type { IRadioProps } from './types';
import Box from '../Box';

const Radio = ( {
	label,
	selected = false,
	testID,
	...props
}: IRadioProps, ref?: any ) => {
	const {
		icon,
		iconProps,
		iconContainerProps,
		labelProps,
		containerProps
	} = useRadioPropsResolver( {
		label, selected, ...props
	} );

	return (
		<Pressable
			testID={testID}
			{...containerProps}
			ref={ref}
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

export default memo( forwardRef( Radio ) );
