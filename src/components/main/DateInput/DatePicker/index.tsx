import React from 'react';
import BaseDatePicker from 'react-native-date-picker';
import type { DatePickerProps } from '../types';

const DatePicker = ( {
	isOpen,
	locale,
	selectedDate,
	testID,
	onConfirm,
	onCancel
}: DatePickerProps ) => (
	<BaseDatePicker
		modal
		mode="date"
		open={isOpen}
		locale={locale}
		testID={testID}
		date={selectedDate}
		onConfirm={onConfirm}
		onCancel={onCancel}
	/>
);

export default DatePicker;
