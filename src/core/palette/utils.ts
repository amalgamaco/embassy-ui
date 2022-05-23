import type { PaletteColorName, PaletteColor, PaletteColorsDefinition } from './types';

export const isColorWithVariant = ( color: PaletteColorName ) => (
	color.split( '.' ).length === 2
);

export const getNestedColor = (
	color: PaletteColor,
	colorsDefinition: PaletteColorsDefinition
): string | undefined => {
	const colorNameComponents = color.split( '.' );
	const colorName = colorNameComponents[ 0 ];
	const colorVariant = parseInt( colorNameComponents[ 1 ], 10 );

	return colorsDefinition[ colorName ]
		? colorsDefinition[ colorName ][ colorVariant ]
		: undefined;
};

export const getColor = (
	color: PaletteColor,
	colorsDefinition: PaletteColorsDefinition | undefined
): string | undefined => {
	if ( !colorsDefinition ) { return undefined; }

	return isColorWithVariant( color )
		? getNestedColor( color, colorsDefinition )
		: colorsDefinition[ color ] as string;
};
