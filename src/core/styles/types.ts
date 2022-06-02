import type {
	BorderWidth, BorderWidthAlias, Radius, RadiusAlias,
	Spacing, SpacingAlias
} from '../layout/types';
import type {
	FontFamilyVariant, FontSize, FontSizeAlias, FontWeight,
	FontWeightAlias, LetterSpacing, LetterSpacingAlias,
	LineHeight, LineHeightAlias
} from '../typography/types';

export interface Transformer {
	color: ( name: string ) => string | undefined,
	font: (
		name: string, config: { weight?: FontWeightAlias, variant?: FontFamilyVariant }
	) => string | undefined,
	letterSpacing: ( alias: LetterSpacingAlias ) => LetterSpacing | undefined,
	lineHeight: ( alias: LineHeightAlias ) => LineHeight | undefined,
	fontWeight: ( alias: FontWeightAlias ) => FontWeight | undefined,
	fontSize: ( alias: FontSizeAlias ) => FontSize | undefined,
	borderWidth( alias: BorderWidthAlias ): BorderWidth | undefined,
	spacing( alias: SpacingAlias ): Spacing | undefined,
	// size( alias: SizeAlias ): Size | undefined,
	radius( alias: RadiusAlias ): Radius | undefined
}

export type TransformerMethodName = keyof Transformer;
export type TransformerFunct = (
	value: PropValue, transformer: Transformer, allProps: ComponentProps
) => StylePropValue;
export type TransformerMethod = TransformerMethodName | TransformerFunct;

export type PropName = string;
export type PropValue = string | number;
export type ComponentProps = Record<PropName, PropValue>

export type StylePropName = string;
export type StylePropValue = string | number | undefined;
export type Style = Record<StylePropName, StylePropValue>

export type PropMap = {
	property: StylePropName,
	category?: string,
	scale?: string,
	transformerMethod?: TransformerMethod
};
export type PropsMappingDict = Record<PropName, PropMap>;
