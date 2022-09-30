import React from 'react';
import { HStack } from '../Stack';
import ConditionalRender from '../../utils/ConditionalRender';
import UIKitIcon from '../../../icons/UIKitIcon';
import Icon from '../Icon';
import Text from '../Text';
import type { IFormControHelperTextProps } from './types';

const FormControlHelperText = ( {
	hint,
	error,
	errorIcon = 'alert-circle',
	__hintText: hintProps,
	__errorText: errorProps,
	__errorIcon: errorIconProps,
	testID
}: IFormControHelperTextProps ) => {
	const isError = !!error;

	return (
		<HStack space="1" justifyContent="flex-start" alignItems="center">
			<ConditionalRender render={!!isError}>
				<Icon
					name={errorIcon}
					as={UIKitIcon}
					testID={testID && `${testID}-error-icon`}
					{...errorIconProps}
				/>
			</ConditionalRender>
			<Text
				testID={testID}
				{...( isError ? errorProps : hintProps )}
			>
				{isError ? error : hint}
			</Text>
		</HStack>
	);
};

export default FormControlHelperText;
