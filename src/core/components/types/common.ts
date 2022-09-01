import type { StyledProps } from '../../theme/types';

export type ComponentName = 'Text' | 'Box' | 'Stack' | 'Button' | 'Pressable' | 'Icon' | 'IconButton' | 'Checkbox';

export type VariantName = string;

export interface PropsWithVariant extends StyledProps {
	variant?: VariantName
}
