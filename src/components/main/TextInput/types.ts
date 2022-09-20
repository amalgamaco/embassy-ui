import type { TextInputProps } from 'react-native';
import type { ComponentStyledProps } from '../../../core/components/types';

export interface ITextInputProps extends Omit<ComponentStyledProps<'TextInput'>, 'textAlign'>, TextInputProps {}
