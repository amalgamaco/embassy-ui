import type { ComponentStyledProps, StyledProps } from '../theme/types';
import type { ElementType, ValueOf } from '../types';

export type ComponentName = 'Text' | 'Box' | 'Stack' | 'Button' | 'Pressable' | 'Icon';
export type VariantName = string;
export type ComponentConfig<C extends ComponentName> = Partial<{
	defaultProps: ComponentStyledProps<C>,
	variants: Record<VariantName, ComponentStyledProps<C>>
	sizes?: Record<string, string | number>
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

export interface PropsWithVariant extends StyledProps {
	variant?: VariantName
}

export const COMPONENT_STATE_PROPS_MAP = {
	'isPressed': '__pressed',
	'isDisabled': '__disabled'
} as const;

export type ComponentStateKey = keyof typeof COMPONENT_STATE_PROPS_MAP;
export type ComponentStateProp = ValueOf<typeof COMPONENT_STATE_PROPS_MAP>;
export type ComponentState = Partial<Record<ComponentStateKey, boolean>>;
