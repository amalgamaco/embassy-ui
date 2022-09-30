import React, { cloneElement, forwardRef, memo } from 'react';
import type { View } from 'react-native';
import Text from '../Text';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import { useRadioPropsResolver } from './hooks';
import type { IRadioProps } from './types';
import Box from '../Box';
import ConditionalRender from '../../utils/ConditionalRender';

const Radio = ( {
	label,
	selected = false,
	testID,
	...props
}: IRadioProps, ref?: React.Ref<View> ) => {
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
				<ConditionalRender render={!!label}>
					<Text
						{...labelProps}
						selectable={false}
						testID={testID && `${testID}-label`}
					>
						{label}
					</Text>
				</ConditionalRender>
			</HStack>
		</Pressable>
	);
};

export default memo( forwardRef( Radio ) );
