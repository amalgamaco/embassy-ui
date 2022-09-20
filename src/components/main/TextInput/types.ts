import type { TextInputProps } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

export interface ITextInputProps extends Omit<TextInputProps, 'textAlign'>, ComponentStyledProps<'TextInput'> {}
