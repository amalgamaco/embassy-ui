import type { ColorMode } from '../types';
import type { PaletteColor, PaletteConfig, PaletteConfigKey } from './types';
import { getColor } from './utils';

export default class Palette {
	private _config: PaletteConfig;

	constructor( config: PaletteConfig ) {
		this._config = config;
	}

	get config() { return this._config; }

	colorFor(
		name: PaletteColor,
		{ colorMode = 'light' }: { colorMode?: ColorMode } = {}
	) {
		return this.getColor( { name, configKey: colorMode } )
			|| this.getColor( { name, configKey: 'base' } );
	}

	private getColor(
		{ name, configKey }: { name: PaletteColor, configKey: PaletteConfigKey }
	): string | undefined {
		const color = getColor( name, this._config[ configKey ] );
		if ( !color ) { return undefined; }

		return getColor( color, this._config[ configKey ] ) || color;
	}
}
