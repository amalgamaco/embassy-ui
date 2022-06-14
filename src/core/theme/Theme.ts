import type Palette from '../palette/Palette';
import type { ColorMode } from '../types';
import type { PaletteColor } from '../palette/types';
import StyleProps from '../styles/StyleProps';
import type { ComponentProps, Style } from '../styles/types';
import type Typography from '../typography/Typography';
import type {
	FontFamilyVariant, FontName, FontSize, FontSizeAlias,
	FontWeight, FontWeightAlias, LetterSpacing,
	LetterSpacingAlias, LineHeight, LineHeightAlias
} from '../typography/types';

interface ThemeConstructorParams {
	palette: Palette,
	typography: Typography,
	colorMode?: ColorMode
}

export default class Theme {
	private _palette: Palette;
	private _typography: Typography;
	private _colorMode: ColorMode;

	constructor( { palette, typography, colorMode = 'light' }: ThemeConstructorParams ) {
		this._palette = palette;
		this._typography = typography;
		this._colorMode = colorMode;
	}

	get palette() { return this._palette; }
	get typography() { return this._typography; }
	get colorMode() { return this._colorMode; }
	get statusBarStyle() {
		return this._colorMode === 'light'
			? 'dark-content'
			: 'light-content';
	}

	// Palette (delegation)
	color( name: PaletteColor ): string | undefined {
		const { colorMode } = this;
		return this._palette.colorFor( name, { colorMode } );
	}

	// Typography (delegation)
	font(
		name: FontName,
		{ weight, variant }: { weight?: FontWeightAlias, variant?: FontFamilyVariant } = {}
	): FontName | undefined {
		return this._typography.font( name, { weight, variant } );
	}

	letterSpacing( alias: LetterSpacingAlias ): LetterSpacing | undefined {
		return this._typography.letterSpacing( alias );
	}

	lineHeight( alias: LineHeightAlias ): LineHeight | undefined {
		return this._typography.lineHeight( alias );
	}

	fontWeight( alias: FontWeightAlias ): FontWeight | undefined {
		return this._typography.fontWeight( alias );
	}

	fontSize( alias: FontSizeAlias ): FontSize | undefined {
		return this._typography.fontSize( alias );
	}

	switchColorMode( colorMode: ColorMode ): Theme {
		return new Theme( {
			palette: this._palette,
			typography: this._typography,
			colorMode
		} );
	}

	styleForProps( props: ComponentProps ): Style {
		return new StyleProps( { props, transformer: this } ).style;
	}

	get config() {
		return {
			colorMode: this.colorMode,
			palette: this._palette.config,
			typography: this._typography.config
		};
	}
}
