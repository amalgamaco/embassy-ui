import type {
	BorderWidth,
	BorderWidthAlias,
	LayoutConfig, Radius, RadiusAlias,
	Size, SizeAlias, Spacing, SpacingAlias
} from './types';

export default class Layout {
	private _config: LayoutConfig;

	constructor( config: LayoutConfig ) {
		this._config = config;
	}

	get config() { return this._config; }

	borderWidth( alias: BorderWidthAlias ): BorderWidth | undefined {
		return this._config.borderWidths[ alias ];
	}

	spacing( alias: SpacingAlias ): Spacing | undefined {
		return this._config.spacings[ alias ];
	}

	size( alias: SizeAlias ): Size | undefined {
		return this._config.sizes[ alias ];
	}

	radius( alias: RadiusAlias ): Radius | undefined {
		return this._config.radius[ alias ];
	}
}
