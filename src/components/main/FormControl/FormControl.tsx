import React from 'react';
import ConditionalRender from '../../utils/ConditionalRender';
import { useComponentPropsResolver } from '../../../hooks';
import { VStack } from '../Stack';
import { FormControlContext } from './context';
import FormControlHelperText from './FormControlHelperText';
import FormControlLabel from './FormControlLabel';
import useFormControlAccessibilityProps from './hooks';
import type { IFormControlProps } from './types';

const FormControl = ( {
	label,
	hint,
	error,
	errorIcon,
	showInfoIcon = false,
	onInfoIconPress,
	onInfoIconHoverIn,
	onInfoIconHoverOut,
	infoIcon,
	children,
	disabled = false,
	isRequired = false,
	testID,
	...props
}: IFormControlProps ) => {
	const {
		__label: labelProps,
		__required: requiredProps,
		__hintText: hintProps,
		__infoIcon: infoIconProps,
		__errorText: errorProps,
		__errorIcon: errorIconProps,
		...containerProps
	} = useComponentPropsResolver( 'FormControl', props, { isDisabled: disabled } ) as IFormControlProps;

	const accessibilityProps = useFormControlAccessibilityProps( { label, hint } );

	return (
		<VStack testID={testID} {...containerProps} {...accessibilityProps} space="2">
			<ConditionalRender render={!!label}>
				<FormControlLabel
					text={label as string}
					isRequired={isRequired}
					__required={requiredProps}
					infoIcon={infoIcon}
					showInfoIcon={showInfoIcon}
					onInfoIconHoverIn={onInfoIconHoverIn}
					onInfoIconHoverOut={onInfoIconHoverOut}
					onInfoIconPress={onInfoIconPress}
					__infoIcon={infoIconProps}
					testID={testID && `${testID}-label`}
					{...labelProps}
				/>
			</ConditionalRender>
			<FormControlContext.Provider value={{ disabled, hasError: !!error }}>
				{children}
			</FormControlContext.Provider>
			<ConditionalRender render={( !!hint || !!error )}>
				<FormControlHelperText
					hint={hint}
					error={error}
					errorIcon={errorIcon}
					__hintText={hintProps}
					__errorText={errorProps}
					__errorIcon={errorIconProps}
					testID={testID && `${testID}-helper-text`}
				/>
			</ConditionalRender>
		</VStack>
	);
};

export default FormControl;
