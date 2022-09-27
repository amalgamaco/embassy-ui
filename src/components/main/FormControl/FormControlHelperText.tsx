import React from 'react';
import { HStack } from '../Stack';
import UIKitIcon from '../../../icons/UIKitIcon';
import Icon from '../Icon';
import Text from '../Text';
import type { IFormControHelperTextProps } from './types';

const FormControlHelperText = ( {
	hint,
	error,
	errorIcon = 'alert-circle',
	__hint: hintProps,
	__error: errorProps,
	__errorIcon: errorIconProps,
	testID
}: IFormControHelperTextProps ) => {
	const isError = !!error;

	return (
		<HStack space="1" justifyContent="flex-start" alignItems="center">
			{!!isError && (
				<Icon
					name={errorIcon}
					as={UIKitIcon}
					testID={testID && `${testID}-error-icon`}
					{...errorIconProps} />
			)}
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
