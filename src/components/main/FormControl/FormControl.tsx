import React from 'react';
import { useComponentPropsResolver } from '../../../hooks';
import { VStack } from '../Stack';
import FormControlHelperText from './FormControlHelperText';
import FormControlLabel from './FormControlLabel';
import useFormControlAccessibilityProps from './hooks';
import type { IFormControlProps } from './types';

const FormControl = ( {
	label,
	hint,
	error,
	errorIcon,
	children,
	isRequired = false,
	testID,
	...props
}: IFormControlProps ) => {
	const {
		__label: labelProps,
		__required: requiredProps,
		__hintText: hintProps,
		__errorText: errorProps,
		__errorIcon: errorIconProps,
		...containerProps
	} = useComponentPropsResolver( 'FormControl', props ) as IFormControlProps;

	const accessibilityProps = useFormControlAccessibilityProps( { label, hint } );

	return (
		<VStack testID={testID} {...containerProps} {...accessibilityProps} space="2">
			{!!label && (
				<FormControlLabel
					text={label}
					isRequired={isRequired}
					__required={requiredProps}
					testID={testID && `${testID}-label`}
					{...labelProps}
				/>
			)}
			{children}
			{( !!hint || !!error ) && (
				<FormControlHelperText
					hint={hint}
					error={error}
					errorIcon={errorIcon}
					__hintText={hintProps}
					__errorText={errorProps}
					__errorIcon={errorIconProps}
					testID={testID && `${testID}-helper-text`}
				/>
			)}
		</VStack>
	);
};

export default FormControl;
