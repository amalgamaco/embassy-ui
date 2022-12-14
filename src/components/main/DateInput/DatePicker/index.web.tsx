import React from 'react';
import Fit from 'react-fit';
import Calendar from 'react-calendar';
import type { DatePickerProps } from '../types';

import 'react-calendar/dist/Calendar.css';
import './DatePicker.css';

const DatePicker = ( {
	isOpen,
	locale,
	selectedDate,
	testID,
	onConfirm
}: DatePickerProps ) => (
	isOpen ? (
		<Fit testID={testID} spacing={12}>
			<Calendar
				className="date-picker-calendar"
				value={selectedDate}
				onChange={onConfirm}
				locale={locale}
			/>
		</Fit>
	) : null
);

export default DatePicker;
