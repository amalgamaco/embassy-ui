import { useCallback, useMemo, useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { parse as parseDate, format as formatDate, isValid as isValidDate } from 'date-fns';
import { useMaskedInputProps } from 'react-native-mask-input';
import { maskForFormat } from '../utils/mask';
import type { DateInputProps, DatePickerProps } from '../types';
import { getCurrentLocaleCode, getDateFormatPatternForLocale } from '../utils/locale';
import type { ITextInputProps } from '../../TextInput/types';
import useDateInputValue from './useDateInputValue';
import type { IBoxProps } from '../../Box/types';

const parseDateValue = ( format: string, value?: string ): Date => {
	if ( !value ) { return new Date(); }
	const parsedDate = parseDate( value || '', format, new Date() );
	if ( !isValidDate( parsedDate ) ) { return new Date(); }
	return parsedDate;
};

interface UseDateInputPropsResolverReturnType {
	containerProps: IBoxProps;
	inputProps: ITextInputProps;
	datePickerProps: DatePickerProps;
}

const useDateInputPropsResolver = ( {
	value: initialValue,
	locale = getCurrentLocaleCode(),
	format: formatPattern = getDateFormatPatternForLocale( locale ),
	onChange,
	...props
}: DateInputProps ): UseDateInputPropsResolverReturnType => {
	const [ value, setValue ] = useDateInputValue( { initialValue, onChange } );
	const [ isDatePickerOpen, setIsDatePickerOpen ] = useState( false );

	const onDateSelected = useCallback( ( date?: Date ) => {
		if ( date ) { setValue( formatDate( date, formatPattern ) ); }

		setIsDatePickerOpen( false );
	}, [ formatPattern, setValue, setIsDatePickerOpen ] );

	const onCalendarIconPress = useCallback( () => {
		setIsDatePickerOpen( !isDatePickerOpen );
	}, [ isDatePickerOpen, setIsDatePickerOpen ] );

	const onDatePickerCancelled = useCallback( () => {
		setIsDatePickerOpen( false );
	}, [ setIsDatePickerOpen ] );

	const maskedInputProps = useMaskedInputProps( {
		value: value || '',
		onChangeText: setValue,
		mask: maskForFormat( formatPattern )
	} );

	const containerStyle = useMemo<StyleProp<ViewStyle>>( () => ( {
		position: 'relative',
		zIndex: isDatePickerOpen ? 10000 : 1
	} ), [ isDatePickerOpen ] );

	return {
		containerProps: {
			style: containerStyle
		},
		inputProps: {
			...props,
			...maskedInputProps,
			placeholder: formatPattern,
			keyboardType: 'numeric',
			onIconPress: onCalendarIconPress
		},
		datePickerProps: {
			isOpen: isDatePickerOpen,
			locale,
			testID: props.testID ? `${props.testID}-date-picker` : undefined,
			selectedDate: parseDateValue( formatPattern, value ),
			onConfirm: onDateSelected,
			onCancel: onDatePickerCancelled
		}
	};
};

export default useDateInputPropsResolver;
