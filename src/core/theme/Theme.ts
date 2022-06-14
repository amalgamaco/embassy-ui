import type Palette from '../palette/Palette';
import type { ColorMode } from '../types';
import type { PaletteColor } from '../palette/types';
import StyleProps from '../styles/StyleProps';
import type { ComponentProps, Style } from '../styles/types';
import type Typography from '../typography/Typography';

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

	color( name: PaletteColor ): string | undefined {
		const { colorMode } = this;
		return this._palette.colorFor( name, { colorMode } );
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
}
