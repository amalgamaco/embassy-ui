import type { ITextInputProps } from '../TextInput/types';

export interface DateInputProps extends Omit<ITextInputProps, 'onChange'> {
	onChange?: ( date: string ) => void;

	format?: string;
	locale?: string;
}
