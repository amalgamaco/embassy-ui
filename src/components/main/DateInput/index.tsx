import React from 'react';
import DatePicker from 'react-native-date-picker';
import UIKitIcon from '../../../icons/UIKitIcon';
import Icon from '../Icon';
import TextInput from '../TextInput';
import useDateInputPropsResolver from './hooks/useDateInputPropsResolver';
import type { DateInputProps } from './types';

const DateInput = ( props: DateInputProps ) => {
	const {
		inputProps, datePickerProps
	} = useDateInputPropsResolver( props );

	return (
		<>
			<TextInput
				icon={<Icon as={UIKitIcon} name="calendar-outline" />}
				{...inputProps}
			/>
			<DatePicker
				{...datePickerProps}
			/>
		</>
	);
};

export default DateInput;
