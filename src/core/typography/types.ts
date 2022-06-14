import type { AtLeastOne, WithOptional } from '../types';

export type LetterSpacing = string | number;
export type LetterSpacingAlias = string;
type LetterSpacingsConfig = Record<LetterSpacingAlias, LetterSpacing>

export type LineHeight = string | number;
export type LineHeightAlias = string;
type LineHeightsConfig = Record<LineHeightAlias, LineHeight>

export type FontWeight = number;
export type FontWeightAlias = string;
type FontWeightsConfig = Record<FontWeightAlias, FontWeight>

export type FontSize = string | number;
export type FontSizeAlias = string;
type FontSizesConfig = Record<FontSizeAlias, FontSize>

export type FontFamilyVariant = 'normal' | 'italic';
export type FontName = string;
type FontFamilyVariants = WithOptional<Record<FontFamilyVariant, FontName>, 'italic'>;
export type FontConfig = AtLeastOne<Record<FontWeight, FontFamilyVariants>>;
export type FontAlias = string;
type FontsConfig = Record<FontAlias, FontConfig>;

export type TypographyConfig = {
	letterSpacings: LetterSpacingsConfig,
	lineHeights: LineHeightsConfig,
	fontWeights: FontWeightsConfig,
	fontSizes: FontSizesConfig,
	fonts: FontsConfig,
};
