import type {
	FontConfig, FontFamilyVariant, FontName, FontSize, FontSizeAlias,
	FontWeight, FontWeightAlias, LetterSpacing, LetterSpacingAlias,
	LineHeight, LineHeightAlias, TypographyConfig
} from './types';

type FontMethodConfig = {
	weight?: FontWeightAlias,
	variant?: FontFamilyVariant
};

export default class Typography {
	private _config: TypographyConfig

	constructor( typographyConfig: TypographyConfig ) {
		this._config = typographyConfig;
	}

	font( name: FontName, { weight = 'normal', variant = 'normal' }: FontMethodConfig = {} ): FontName | undefined {
		if ( !this.config.fonts[ name ] ) { return undefined; }
		const fontConfig: FontConfig = this.config.fonts[ name ];

		const rawWeight = this.fontWeight( weight ) || 400;
		const fontVariants = fontConfig[ rawWeight ] ?? fontConfig[ 400 ];

		if ( !fontVariants ) { return undefined; }

		return fontVariants?.[ variant ] || fontVariants?.normal;
	}

	letterSpacing( alias: LetterSpacingAlias ): LetterSpacing | undefined {
		return this.config.letterSpacings[ alias ];
	}

	lineHeight( alias: LineHeightAlias ): LineHeight | undefined {
		return this.config.lineHeights[ alias ];
	}

	fontWeight( alias: FontWeightAlias ): FontWeight | undefined {
		return this.config.fontWeights[ alias ];
	}

	fontSize( alias: FontSizeAlias ): FontSize | undefined {
		return this.config.fontSizes[ alias ];
	}

	get config() { return this._config; }
}
