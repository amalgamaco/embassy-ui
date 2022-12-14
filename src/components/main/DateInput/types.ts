import type { ITextInputProps } from '../TextInput/types';

export interface DateInputProps extends Omit<ITextInputProps, 'onChange'> {
	onChange?: ( date: string ) => void;

	format?: string;
	locale?: string;
}

export interface DatePickerProps {
	isOpen?: boolean;
	locale: string;
	selectedDate: Date;
	testID?: string;
	onConfirm: ( date: Date ) => void;
	onCancel: () => void
}
