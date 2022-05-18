import type Palette from '../palette/Palette';
import type { ColorMode } from '../types';
import type { PaletteColor } from '../palette/types';

interface ThemeConstructorParams {
	palette: Palette,
	colorMode?: ColorMode
}

export default class Theme {
	private _palette: Palette;
	private _colorMode: ColorMode;

	constructor( { palette, colorMode = 'light' }: ThemeConstructorParams ) {
		this._palette = palette;
		this._colorMode = colorMode;
	}

	get palette() { return this._palette; }
	get colorMode() { return this._colorMode; }

	color( name: PaletteColor ) {
		const { colorMode } = this;
		return this._palette.colorFor( name, { colorMode } );
	}
}
