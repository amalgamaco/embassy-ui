import type { ComponentStyledProps } from '../theme/types';
import type { ElementType } from '../types';

export type ComponentName = 'Text' | 'Box' | 'Stack' | 'Button' | 'Pressable';
export type VariantName = string;
export type ComponentConfig<C extends ComponentName> = Partial<{
	defaultProps: ComponentStyledProps<C>,
	variants: Record<VariantName, ComponentStyledProps<C>>
}>;
export type ComponentsConfig = Partial<{
	[ C in ComponentName ]: ComponentConfig<C>
}>;

const PSEUDO_PROPS_CONFIG = {
	'Button': [ '__label', '__stack' ]
} as const;

type PseudoPropsConfig = typeof PSEUDO_PROPS_CONFIG;

export type ComponentPseudoProps<C extends ComponentName> = C extends keyof PseudoPropsConfig
	? ElementType<PseudoPropsConfig[C]>
	: never;
