import React, {
	memo, forwardRef, useState, useCallback
} from 'react';
import type { ICheckboxGroupProps } from './types';
import Box from '../Box';
import { CheckboxGroupContext } from './context';

const CheckboxGroup = ( {
	children,
	value: initialSelectedValues = [],
	onChange = undefined,
	disabled = false,
	...props
}: ICheckboxGroupProps, ref?: any ) => {
	const [ selectedValues, setSelectedValues ] = useState( new Set( initialSelectedValues ) );
	const onCheckboxPress = useCallback( ( checkboxValue: string ) => {
		if ( selectedValues.has( checkboxValue ) ) {
			selectedValues.delete( checkboxValue );
		} else {
			selectedValues.add( checkboxValue );
		}

		setSelectedValues( selectedValues );
		onChange?.( Array.from( selectedValues ) );
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
