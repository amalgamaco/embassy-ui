import {
	Dispatch, SetStateAction, useEffect, useState
} from 'react';
import type { DateInputProps } from '../types';

export interface UseDateInputValueProps {
	initialValue?: DateInputProps[ 'value' ];
	onChange?: DateInputProps[ 'onChange' ];
}

export type DateInputValue = string | undefined;

const useDateInputValue = (
	{ initialValue, onChange }: UseDateInputValueProps
): [ DateInputValue, Dispatch<SetStateAction<DateInputValue>> ] => {
	const [ value, setValue ] = useState( initialValue );

	useEffect( () => {
		if ( value !== undefined ) { onChange?.( value ); }
	}, [ value, onChange ] );

	useEffect(
		() => { setValue( initialValue ); },
		[ initialValue, setValue ]
	);

	return [ value, setValue ];
};

export default useDateInputValue;
