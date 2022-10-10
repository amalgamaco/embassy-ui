import type { StyledProps } from '../../theme/types';

export type ComponentName = 'Text' | 'Box' | 'Stack' | 'Button' | 'Pressable' | 'Icon' | 'Checkbox'
| 'IconButton' | 'Radio' | 'FormControl' | 'TextInput' | 'Chip';

export type VariantName = string;

export interface PropsWithVariant extends StyledProps {
	variant?: VariantName
}
