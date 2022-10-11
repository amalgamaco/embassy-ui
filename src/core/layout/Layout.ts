import type {
	BorderWidth,
	BorderWidthAlias,
	LayoutConfig, Radius, RadiusAlias,
	Size, SizeAlias, Spacing, SpacingAlias
} from './types';

const isNegativeAlias = ( alias: string ) => (
	alias.charAt( 0 ) === '-'
);

const translateSpacing = (
	alias: SpacingAlias,
	scale: { [ x: SpacingAlias ]: Spacing }
): Spacing | undefined => {
	if ( !alias ) { return undefined; }

	let scaleAlias = String( alias );
	let isNegative = false;

	if ( isNegativeAlias( scaleAlias ) ) {
		isNegative = true;
		scaleAlias = scaleAlias.slice( 1 );
	}

	if ( !scale[ scaleAlias ] ) { return undefined; }

	return Number( scale[ scaleAlias ] ) * ( isNegative ? -1 : 1 );
};

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
		return translateSpacing( alias, this._config.spacings );
	}

	size( alias: SizeAlias ): Size | undefined {
		return this._config.sizes[ alias ];
	}

	radius( alias: RadiusAlias ): Radius | undefined {
		return this._config.radius[ alias ];
	}
}
