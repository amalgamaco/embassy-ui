import type { TextProps } from 'react-native';
import type { ComponentStyledProps, VariantType } from '../../../core/components/types';

export interface ITextProps extends TextProps, ComponentStyledProps<'Text'> {
	children?: React.ReactNode | string;
	variant?: VariantType<'Text'>;
}
