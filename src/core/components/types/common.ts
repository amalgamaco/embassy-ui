import type { StyledProps } from '../../theme/types';

export type ComponentName = 'Text' | 'Box' | 'Stack' | 'Button' | 'Pressable' | 'Icon' | 'Checkbox'
	| 'IconButton' | 'Radio' | 'FormControl' | 'TextInput' | 'Chip' | 'Switch' | 'Banner' | 'Dialog'
	| 'Image' | 'Avatar' | 'Card' | 'CardHeader' | 'CardContent' | 'CardActions' | 'CardMedia';

export type VariantName = string;

export interface PropsWithVariant extends StyledProps {
	variant?: VariantName
}
