/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type { Properties as CSSProperties } from 'csstype';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type {
	ComponentName, ComponentPseudoProps, ComponentStateProp
} from '../components/types';
import type { StlyePropsMapping } from '../styles/propsMapping';
import type { Leaves } from '../types';
import type defaultTheme from './defaultTheme';

export type ThemeConfig = typeof defaultTheme;
export interface ICustomThemeConfig {}
export interface IThemeConfig extends ICustomThemeConfig,
	Omit<ThemeConfig, keyof ICustomThemeConfig> {}

export type ColorType = Leaves<IThemeConfig[ 'palette' ][ 'base' ]>
	| Leaves<IThemeConfig[ 'palette' ][ 'light' ]>
	| Leaves<IThemeConfig[ 'palette' ][ 'dark' ]>
	| ( string & {} );

type RNStyles = ViewStyle & ImageStyle & TextStyle;

type GetThemeScaleValues<T extends keyof IThemeConfig> = 'palette' extends T
	? ColorType
	: keyof IThemeConfig[T] | ( string & {} ) | ( number & {} );

type GetThemeCategorizedScaleValues<
	T extends keyof IThemeConfig, Y extends keyof IThemeConfig[T]
> = (
	keyof IThemeConfig[T][Y] | ( string & {} ) | ( number & {} )
);

type GetCategorizedRNStyles<key, category extends keyof IThemeConfig, scale = null> = (
	scale extends keyof IThemeConfig[ category ]
		? GetThemeCategorizedScaleValues<category, scale>
		: key extends keyof CSSProperties
		? CSSProperties[key]
		: key extends keyof RNStyles
		? RNStyles[key]
		: unknown
)

type GetRNStyles<key, scale = null, category = null> = (
	category extends keyof IThemeConfig
	? GetCategorizedRNStyles<key, category, scale>
	: scale extends keyof IThemeConfig
	? GetThemeScaleValues<scale>
	: key extends keyof CSSProperties
	? CSSProperties[key]
	: key extends keyof RNStyles
	? RNStyles[key]
	: unknown
);

type AllProps<T extends StlyePropsMapping> = {
  [key in Extract<keyof T, string>]?: T[key] extends { property: any; scale: any, category: any }
		? GetRNStyles<T[key]['property'], T[key]['scale'], T[key]['category']>
		: T[key] extends { property: any; scale: any }
		? GetRNStyles<T[key]['property'], T[key]['scale']>
		: T[key] extends { property: any }
		? GetRNStyles<T[key]['property']>
		: unknown;
};

export type VariantType<
  Component extends keyof IThemeConfig['components']
> = 'variants' extends keyof IThemeConfig['components'][Component]
  ? keyof IThemeConfig['components'][Component]['variants'] | ( string & {} )
  : unknown;

export type ComponentSizeType<
  Component extends keyof IThemeConfig['components']
> = 'sizes' extends keyof IThemeConfig['components'][Component]
? keyof IThemeConfig['components'][Component]['sizes'] | ( string & {} ) | number
: never;

export type StyledProps = AllProps<StlyePropsMapping>;

type PseudoPropStyledProps<C extends ComponentName> =
	Partial<Record<ComponentPseudoProps<C>, StyledProps>>;

export type StyledPropsWithPseudoProps<C extends ComponentName> = {
	[K in ( keyof StyledProps | keyof PseudoPropStyledProps<C> )]?:
		K extends keyof StyledProps
			? StyledProps[K]
			: K extends keyof PseudoPropStyledProps<C>
			? PseudoPropStyledProps<C>[K]
			: never
};

export type ComponentStateProps<C extends ComponentName> =
	Partial<Record<ComponentStateProp, StyledPropsWithPseudoProps<C>>>;

export type ComponentStyledProps<C extends ComponentName> = {
	[K in ( keyof StyledPropsWithPseudoProps<C> | keyof ComponentStateProps<C>
		| 'size' )]?:
		K extends keyof StyledPropsWithPseudoProps<C>
			? StyledPropsWithPseudoProps<C>[K]
			: K extends ComponentStateProp
			? ComponentStateProps<C>[K]
			: K extends 'size'
			? C extends keyof IThemeConfig['components']
				? ComponentSizeType<C>
				: never
			: never
};

export type RecursivePartial<T> = {
	[P in keyof T]?:
		T[P] extends ( infer U )[] ? RecursivePartial<U>[] :
		T[P] extends object ? RecursivePartial<T[P]> :
		T[P];
 };
