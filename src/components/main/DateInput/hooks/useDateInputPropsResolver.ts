import { useCallback, useEffect, useState } from 'react';
import type { DatePickerProps } from 'react-native-date-picker';
import { parse as parseDate, format as formatDate, isValid as isValidDate } from 'date-fns';
import { useMaskedInputProps } from 'react-native-mask-input';
import { maskForFormat } from '../utils/mask';
import type { DateInputProps } from '../types';
import { getCurrentLocaleCode, getDateFormatPatternForLocale } from '../utils/locale';
import type { ITextInputProps } from '../../TextInput/types';

const parseDateValue = ( format: string, value?: string ): Date => {
	if ( !value ) { return new Date(); }
	const parsedDate = parseDate( value || '', format, new Date() );
	if ( !isValidDate( parsedDate ) ) { return new Date(); }
	return parsedDate;
};

const useDateInputPropsResolver = ( {
	value: initialValue,
	locale = getCurrentLocaleCode(),
	format: formatPattern = getDateFormatPatternForLocale( locale ),
	onChange,
	...props
}: DateInputProps ) => {
	const [ value, setValue ] = useState( initialValue );
	const [ isDatePickerOpen, setIsDatePickerOpen ] = useState( false );

	const onDateSelected = useCallback( ( date?: Date ) => {
		if ( date ) { setValue( formatDate( date, formatPattern ) ); }

		setIsDatePickerOpen( false );
	}, [ formatPattern, setValue, setIsDatePickerOpen ] );

	const onCalendarIconPress = useCallback( () => {
		setIsDatePickerOpen( true );
	}, [ setIsDatePickerOpen ] );

	const onDatePickerCancelled = useCallback( () => {
		setIsDatePickerOpen( false );
	}, [ setIsDatePickerOpen ] );

	useEffect( () => {
		if ( value !== undefined ) { onChange?.( value ); }
	}, [ value, onChange ] );

	useEffect(
		() => { setValue( initialValue ); },
		[ initialValue, setValue ]
	);

	const maskedInputProps = useMaskedInputProps( {
		value: value || '',
		onChangeText: setValue,
		mask: maskForFormat( formatPattern )
	} );

	return {
		inputProps: {
			...props,
			...maskedInputProps,
			placeholder: formatPattern,
			keyboardType: 'numeric',
			onIconPress: onCalendarIconPress
		},
		datePickerProps: {
			modal: true,
			open: isDatePickerOpen,
			mode: 'date',
			locale,
			testID: props.testID ? `${props.testID}-date-picker` : undefined,
			date: parseDateValue( formatPattern, value ),
			onConfirm: onDateSelected,
			onCancel: onDatePickerCancelled
		}
	} as { inputProps: ITextInputProps, datePickerProps: DatePickerProps };
};

export default useDateInputPropsResolver;
