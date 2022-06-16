import type { TextProps } from 'react-native';
import type { StyledProps, VariantType } from 'src/core/theme/types';

export interface ITextProps extends StyledProps, TextProps {
	children?: React.ReactNode | string;
	variant?: VariantType<'Text'>;
}
