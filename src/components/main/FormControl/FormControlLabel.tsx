import React from 'react';
import ConditionalRender from '../../utils/ConditionalRender';
import { HStack } from '../Stack';
import Text from '../Text';
import type { IFormControlLabelProps } from './types';

const FormControlLabel = ( {
	text,
	isRequired = false,
	__required: requiredProps,
	testID,
	...props
}: IFormControlLabelProps ) => (
	<HStack space="1" justifyContent="flex-start">
		<Text testID={testID} {...props}>{text}</Text>
		<ConditionalRender render={isRequired}>
			<Text testID={testID && `${testID}-required`} {...requiredProps}>*</Text>
		</ConditionalRender>
	</HStack>
);

export default FormControlLabel;
