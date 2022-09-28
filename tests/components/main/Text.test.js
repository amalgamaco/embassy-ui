import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../src/core/theme/context';
import Text from '../../../src/components/main/Text';

const WithThemeProvider = ( { children } ) => (
	<ThemeProvider>
		{children}
	</ThemeProvider>
);

describe( 'Text', () => {
	const renderText = ( text, props ) => render(
		<Text testID="test-text" {...props} >{text}</Text>,
		{ wrapper: WithThemeProvider }
	);

	it( 'contains the passed text', () => {
		const { getByTestId } = renderText( 'Test!' );
		expect( getByTestId( 'test-text' ) ).toHaveTextContent( 'Test!' );
	} );

	it( 'translates the font prop to the correct style', () => {
		const { getByTestId } = renderText(
			'Test!',
			{ font: 'Inter' }
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			fontFamily: 'Inter-Regular'
		} );
	} );

	it( 'chooses the right font for the fontWeight', () => {
		const { getByTestId } = renderText(
			'Test!',
			{ font: 'Inter', fontWeight: 'medium' }
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			fontFamily: 'Inter-Medium'
		} );
	} );

	it( 'chooses the right font for the fontStyle', () => {
		const { getByTestId } = renderText(
			'Test!',
			{ font: 'Epilogue', fontStyle: 'italic' }
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			fontFamily: 'Epilogue-RegularItalic'
		} );
	} );

	it( 'translates the fontWeight property correctly', () => {
		const { getByTestId } = renderText(
			'Test!',
			{ fontWeight: 'extrabold' }
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			fontWeight: '800'
		} );
	} );

	it( 'translates the fontSize property correctly', () => {
		const { getByTestId } = renderText(
			'Test!',
			{ fontSize: '2xs' }
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			fontSize: 12
		} );
	} );

	it( 'translates the lineHeight property correctly', () => {
		const { getByTestId } = renderText(
			'Test!',
			{ lineHeight: '2xl' }
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			lineHeight: 32
		} );
	} );

	it( 'translates the letterSpacing property correctly', () => {
		const { getByTestId } = renderText(
			'Test!',
			{ letterSpacing: 'lg' }
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			letterSpacing: 0.8
		} );
	} );

	it( 'translates the color property correctly', () => {
		const { getByTestId } = renderText(
			'Test!',
			{ color: 'primary.400' }
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			color: '#475993'
		} );
	} );

	it( 'translates the background color property correctly', () => {
		const { getByTestId } = renderText(
			'Test!',
			{ bgColor: 'primary.400' }
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			backgroundColor: '#475993'
		} );
	} );

	it( 'merges the style prop with the styles calculated from the other props', () => {
		const { getByTestId } = renderText(
			'Test!',
			{
				testID: 'test-text',
				font: 'Epilogue',
				fontStyle: 'italic',
				fontWeight: 'bold',
				color: 'white',
				bgColor: 'primary.400',
				style: {
					height: 30,
					backgroundColor: 'red'
				}
			}
		);

		expect( getByTestId( 'test-text' ) ).toHaveStyle( {
			fontFamily: 'Epilogue-BoldItalic',
			fontStyle: 'italic',
			fontWeight: '700',
			color: '#FFFFFF',
			height: 30,
			backgroundColor: 'red'
		} );
	} );
} );
