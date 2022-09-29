import React, {
	memo, forwardRef, useState, useCallback
} from 'react';
import { Set } from 'immutable';
import type { ICheckboxGroupProps } from './types';
import Box from '../Box';
import { CheckboxGroupContext } from './context';
import { useFormControlContext } from '../FormControl/context';

const CheckboxGroup = ( {
	children,
	value: initialSelectedValues = [],
	onChange = undefined,
	disabled: disabledProp = false,
	...props
}: ICheckboxGroupProps, ref?: any ) => {
	const [ selectedValues, setSelectedValues ] = useState( Set( initialSelectedValues ) );

	const formControlState = useFormControlContext();
	const disabled = formControlState?.disabled || disabledProp;

	const onCheckboxPress = useCallback( ( checkboxValue: string ) => {
		const operation = selectedValues.has( checkboxValue ) ? 'delete' : 'add';
		const newSelectedValues = selectedValues[ operation ]( checkboxValue );

		setSelectedValues( newSelectedValues );
		onChange?.( Array.from( newSelectedValues ) );
	}, [ selectedValues, setSelectedValues, onChange ] );

	return (
		<CheckboxGroupContext.Provider
			value={( { disabled, selectedValues, onCheckboxPress } )}
		>
			<Box ref={ref} {...props}>
				{children}
			</Box>
		</CheckboxGroupContext.Provider>
	);
};

export default memo( forwardRef( CheckboxGroup ) );
