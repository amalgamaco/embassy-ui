import React, { forwardRef, memo } from 'react';
import type { View } from 'react-native';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import Text from '../Text';
import { useChipPropsResolver } from './hooks';
import type { IChipProps } from './types';

const Chip = ( {
	label, testID, ...props
}: IChipProps, ref?: React.Ref<View> ) => {
	const {
		containerProps,
		stackProps,
		labelProps
	} = useChipPropsResolver( props );

	return (
		<Pressable
			{...containerProps}
			testID={testID}
			ref={ref}
		>
			<HStack {...stackProps}>
				<Text
					{...labelProps}
					testID={testID ? `${testID}-label` : undefined}
				>
					{label}
				</Text>
			</HStack>
		</Pressable>
	);
};

export default memo( forwardRef( Chip ) );
