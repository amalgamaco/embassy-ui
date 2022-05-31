export type BorderWidthAlias = string;
export type BorderWidth = number | string;
export type SpacingAlias = string;
export type Spacing = number | string;
export type SizeAlias = string;
export type Size = number | string;
export type RadiusAlias = string;
export type Radius = number | string;

export type LayoutConfig = {
	borderWidths: Record<BorderWidthAlias, BorderWidth>,
	spacings: Record<SpacingAlias, Spacing>,
	sizes: Record<SizeAlias, Size>
	radius: Record<RadiusAlias, Radius>
}
