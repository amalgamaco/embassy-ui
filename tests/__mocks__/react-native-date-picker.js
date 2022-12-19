import React from 'react';
import { View } from 'react-native';

export { DatePickerProps } from 'react-native-date-picker';

const DatePicker = props => (
	<View {...props} />
);
DatePicker.displayName = 'DatePicker';

export default DatePicker;
