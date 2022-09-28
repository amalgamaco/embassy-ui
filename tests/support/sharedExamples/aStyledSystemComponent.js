const { STYLE_PROPS_MAPPING } = require( '../../../src/core/styles/propsMapping' );

const colorPropValues = [ 'primary.400', '#475993' ];
const letterSpacingPropValues = [ 'md', 0.4 ];
const lineHeightPropValues = [ 'lg', 24 ];
const fontWeightPropValues = [ 'bold', '700' ];
const fontSizePropValues = [ 'xs', 14 ];
const fontPropValues = [ 'Epilogue', 'Epilogue-Regular' ];
const borderWidthPropValues = [ 'lg', 4 ];
const spacingPropValues = [ '16', 64 ];
const radiusPropValues = [ 'lg', 12 ];

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

module.exports = ( { renderComponent, testId, omitProps = [] } ) => {
	describe( 'is a styled component', () => {
		const propsWithScale = Object
			.keys( STYLE_PROPS_MAPPING )
			.filter( prop => !!STYLE_PROPS_MAPPING[ prop ].scale && !omitProps.includes( prop ) );

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
