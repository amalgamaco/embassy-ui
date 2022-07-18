/* eslint-disable @typescript-eslint/ban-types */
// Components styled props types
// ----------------------------
// Here we define the syled props types for the components available in
// the theme.
// For a given component C the componet styled props are:
//   All the styled props defined (bg, color, margin, fontSize, etc)
//    + Custom styled props defined for C (e.g. the as prop for Icon)
//    + size prop (optional but available to all) (size)
//    + Pseudo props defined for C (__label, __icon, etc)
//    + State props (__disabled, __pressed, etc)
import type { IThemeConfig, StyledProps } from '../../theme/types';
import type { ComponentName } from './common';
import type { ComponentCustomProps } from './customProps';
import type { ComponentPseudoProps } from './pseudoProps';
import type { ComponentStateProp } from './state';

export type VariantType<
  Component extends keyof IThemeConfig['components']
> = 'variants' extends keyof IThemeConfig['components'][Component]
  ? keyof IThemeConfig['components'][Component]['variants'] | ( string & {} )
  : unknown;

export type ComponentSizeType<
  Component extends keyof IThemeConfig['components']
> = 'sizes' extends keyof IThemeConfig['components'][Component]
? keyof IThemeConfig['components'][Component]['sizes'] | ( string & {} ) | number
: unknown;

export type ComponentBaseStyledProps<C extends ComponentName> = {
	[K in (
		keyof StyledProps
		| keyof ComponentCustomProps<C>
		| 'size'
	)]?:
		K extends keyof StyledProps
			? StyledProps[K]
			: K extends keyof ComponentCustomProps<C>
			? ComponentCustomProps<C>[K]
			: K extends 'size'
			? C extends keyof IThemeConfig['components']
				? ComponentSizeType<C>
				: any
			: never
};

export type ComponentBaseStyledPropsWithPseudoProps<C extends ComponentName> = {
	[K in (
		keyof ComponentBaseStyledProps<C>
		| keyof ComponentPseudoProps<C>
	)]?:
		K extends keyof ComponentBaseStyledProps<C>
			? ComponentBaseStyledProps<C>[K]
			: K extends keyof ComponentPseudoProps<C>
			? ComponentPseudoProps<C>[K]
			: never
};

export type ComponentStateProps<C extends ComponentName> =
	Partial<Record<ComponentStateProp, ComponentBaseStyledPropsWithPseudoProps<C>>>;

export type ComponentStyledProps<C extends ComponentName> = {
	[K in (
		keyof ComponentBaseStyledPropsWithPseudoProps<C>
		| keyof ComponentStateProps<C>
	)]?:
		K extends keyof ComponentBaseStyledPropsWithPseudoProps<C>
			? ComponentBaseStyledPropsWithPseudoProps<C>[K]
			: K extends keyof ComponentStateProps<C>
			? ComponentStateProps<C>[K]
			: never
};
