const { STYLE_PROPS_MAPPING } = require( '../../../src/core/styles/propsMapping' );

const colorPropValues = [ 'primary.400', '#999AB8' ];
const letterSpacingPropValues = [ 'md', 0.1 ];
const lineHeightPropValues = [ 'lg', 24 ];
const fontWeightPropValues = [ 'bold', '700' ];
const fontSizePropValues = [ 'xs', 12 ];
const fontPropValues = [ 'Epilogue', 'Epilogue-Regular' ];
const borderWidthPropValues = [ '4', '4px' ];
const spacingPropValues = [ '16', 64 ];
const radiusPropValues = [ 'lg', 8 ];

const propValuesByScale = {
	palette: colorPropValues,
	letterSpacings: letterSpacingPropValues,
	lineHeights: lineHeightPropValues,
	fontWeights: fontWeightPropValues,
	fontSizes: fontSizePropValues,
	fonts: fontPropValues,
	borderWidths: borderWidthPropValues,
	spacings: spacingPropValues,
	radius: radiusPropValues
};

const getExpectedStyleForProp = ( prop ) => {
	if ( !STYLE_PROPS_MAPPING[ prop ] ) { return undefined; }

	const { scale, property } = STYLE_PROPS_MAPPING[ prop ];
	const [ propValue, expectedValue ] = propValuesByScale[ scale ];

	const expectedStyle = { [ property ]: expectedValue };
	return { propValue, expectedStyle };
};

module.exports = ( { renderComponent, testId } ) => {
	describe( 'is a styled component', () => {
		const propsWithScale = Object
			.keys( STYLE_PROPS_MAPPING )
			.filter( prop => !!STYLE_PROPS_MAPPING[ prop ].scale );

		it.each( propsWithScale )(
			'translates the prop %s to the correct style',
			( prop ) => {
				const { propValue, expectedStyle } = getExpectedStyleForProp( prop );
				const { getByTestId } = renderComponent( { [ prop ]: propValue } );

				expect( getByTestId( testId ) ).toHaveStyle( expectedStyle );
			}
		);
	} );
};
