import type { TextProps } from 'react-native';
import type { ComponentStyledProps, VariantType } from '../../../core/components/types';

export interface ITextProps extends TextProps, ComponentStyledProps<'Text'> {
	children?: TextProps[ 'children' ];
	variant?: VariantType<'Text'>;
}
