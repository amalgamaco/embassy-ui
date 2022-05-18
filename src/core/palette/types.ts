import type { ColorMode, WithOptional } from '../types';

export type Color = string;
export type ColorVariant = number;

export type PaletteColorName = string;
export type PaletteColorDefinition = Color | Record<ColorVariant, Color>;
export type PaletteColorsDefinition = Record<PaletteColorName, PaletteColorDefinition>;

export type PaletteColorsConfigKey = 'base' | ColorMode;
export type PaletteColorsConfig = WithOptional<
	Record<PaletteColorsConfigKey, PaletteColorsDefinition>,
	ColorMode
>

export type PaletteColor = string;
