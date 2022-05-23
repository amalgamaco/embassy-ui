import type { ColorMode } from '../types';
import type { PaletteColor, PaletteColorsConfig, PaletteColorsConfigKey } from './types';
import { getColor } from './utils';

export default class Palette {
	private _colors: PaletteColorsConfig;

	constructor( colors: PaletteColorsConfig ) {
		this._colors = colors;
	}

	get colors() { return this._colors; }

	colorFor(
		name: PaletteColor,
		{ colorMode = 'light' }: { colorMode?: ColorMode } = {}
	) {
		return this.getColor( { name, configKey: colorMode } )
			|| this.getColor( { name, configKey: 'base' } );
	}

	private getColor(
		{ name, configKey }: { name: PaletteColor, configKey: PaletteColorsConfigKey }
	): string | undefined {
		return getColor( name, this._colors[ configKey ] );
	}
}
