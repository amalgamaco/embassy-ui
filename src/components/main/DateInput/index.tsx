import React from 'react';
import DatePicker from './DatePicker';
import UIKitIcon from '../../../icons/UIKitIcon';
import Icon from '../Icon';
import TextInput from '../TextInput';
import useDateInputPropsResolver from './hooks/useDateInputPropsResolver';
import type { DateInputProps } from './types';
import Box from '../Box';

const DateInput = ( props: DateInputProps ) => {
	const {
		containerProps, inputProps, datePickerProps
	} = useDateInputPropsResolver( props );

	return (
		<Box {...containerProps}>
			<TextInput
				icon={<Icon as={UIKitIcon} name="calendar-outline" />}
				{...inputProps}
			/>
			<DatePicker
				{...datePickerProps}
			/>
		</Box>
	);
};

export default DateInput;
