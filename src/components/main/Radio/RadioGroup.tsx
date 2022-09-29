import React, {
	memo, forwardRef, useState, useCallback
} from 'react';
import type { IRadioGroupProps } from './types';
import Box from '../Box';
import { RadioGroupContext } from './context';
import { useFormControlContext } from '../FormControl/context';

const RadioGroup = ( {
	children,
	value: initialSelectedValue,
	onChange = undefined,
	disabled: disabledProp = false,
	...props
}: IRadioGroupProps, ref?: any ) => {
	const [ selectedValue, setSelectedValue ] = useState( initialSelectedValue );
	const formControlState = useFormControlContext();

	const disabled = formControlState?.disabled || disabledProp;

	const onRadioPressed = useCallback( ( value ) => {
		setSelectedValue( value );
		onChange?.( value );
	}, [ setSelectedValue, onChange ] );

	return (
		<RadioGroupContext.Provider
			value={( { disabled, selectedValue, onRadioPress: onRadioPressed } )}
		>
			<Box ref={ref} {...props}>
				{children}
			</Box>
		</RadioGroupContext.Provider>
	);
};

export default memo( forwardRef( RadioGroup ) );
