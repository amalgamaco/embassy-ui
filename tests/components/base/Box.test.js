import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import { ThemeProvider } from '../../../src/core/theme/context';
import { STYLE_PROPS_MAPPING } from '../../../src/core/styles/propsMapping';

import Box from '../../../src/components/main/Box';
import Text from '../../../src/components/main/Text';

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

const WithThemeProvider = ( { children } ) => (
	<ThemeProvider>
		{children}
	</ThemeProvider>
);

describe( 'Box', () => {
	const renderBox = ( children, props ) => render(
		<Box testID="test-box" {...props} >{children}</Box>,
		{ wrapper: WithThemeProvider }
	);

	it( 'contains the passed text', () => {
		const { getByTestId } = renderBox( <View><Text>Test!</Text></View> );
		expect( getByTestId( 'test-box' ) ).toHaveTextContent( 'Test!' );
	} );

	describe( 'props translation', () => {
		const propsWithScale = Object
			.keys( STYLE_PROPS_MAPPING )
			.filter( prop => !!STYLE_PROPS_MAPPING[ prop ].scale );

		propsWithScale.forEach( ( prop ) => {
			describe( prop, () => {
				it( 'translates the prop to the correct style', () => {
					const { propValue, expectedStyle } = getExpectedStyleForProp( prop );

					const { getByTestId } = renderBox(
						<View><Text>Test!</Text></View>,
						{ [ prop ]: propValue }
					);

					expect( getByTestId( 'test-box' ) ).toHaveStyle( expectedStyle );
				} );
			} );
		} );
	} );
} );
