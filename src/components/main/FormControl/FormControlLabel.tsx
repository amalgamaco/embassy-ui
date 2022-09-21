import React from 'react';
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
		{isRequired && (
			<Text testID={testID && `${testID}-required`} {...requiredProps}>*</Text>
		)}
	</HStack>
);

export default FormControlLabel;
