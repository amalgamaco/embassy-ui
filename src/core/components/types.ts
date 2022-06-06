import type { StyledProps } from '../theme/types';

export type ComponentName = 'Text' | 'Box' | 'Stack';
export type VariantName = string;
export type ComponentConfig = Partial<{
	defaultProps: StyledProps,
	variants: Record<VariantName, StyledProps>
}>;
export type ComponentsConfig = Partial<Record<ComponentName, ComponentConfig>>;
