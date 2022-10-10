import React, { forwardRef, memo } from 'react';
import type { View } from 'react-native';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import Text from '../Text';
import { useChipPropsResolver } from './hooks';
import type { IChipProps } from './types';
import cloneElement from '../../utils/cloneElement';

const Chip = ( {
	label,
	testID,
	icon: iconProp,
	...props
}: IChipProps, ref?: React.Ref<View> ) => {
	const {
		containerProps,
		stackProps,
		labelProps,
		iconProps
	} = useChipPropsResolver( props );

	const icon = cloneElement( iconProp, iconProps || {} );

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
			</HStack>
		</Pressable>
	);
};

export default memo( forwardRef( Chip ) );
