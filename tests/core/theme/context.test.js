import React, { useEffect } from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Palette from '../../../src/core/palette/Palette';
import Theme from '../../../src/core/theme/Theme';
import { ThemeProvider, ThemeConsumer } from '../../../src/core/theme/context';

const defaultTheme = new Theme( {
	palette: new Palette(
		{
			base: {
				primary: {
					900: '#2200C1',
					800: '#4600c8',
					700: '#5700ce',
					600: '#6700d6',
					500: '#7101dc',
					400: '#8a3fe2',
					300: '#a066e8',
					200: '#bc94ee',
					100: '#d7bff4',
					50: '#f0e5fb'
				},
				neutral: '#000000'
			},
			dark: {
				primary: {
					300: '#aaffee'
				},
				neutral: '#ffffff'
			}
		}
	)
} );

const renderWithProvider = ( ui, { providerProps, ...renderOptions } = {} ) => render(
	<ThemeProvider theme={defaultTheme} {...providerProps}>{ui}</ThemeProvider>,
	renderOptions
);

const ModeChanger = ( { theme, switchColorMode } ) => {
	useEffect( () => {
		switchColorMode( 'dark' );
	}, [] );

	return ( <Text>Theme color mode: {theme.colorMode }</Text> );
};

describe( 'ThemeContext', () => {
	describe( 'Consumer', () => {
		it( 'returns the correct theme', () => {
			const { getByText } = renderWithProvider(
				<ThemeConsumer>
					{( { theme } ) => <Text>Theme primary color: {theme.color( 'primary.300' ) }</Text>}
				</ThemeConsumer>
			);

			expect( getByText( /^Theme primary color:/ ) ).toHaveTextContent( 'Theme primary color: #a066e8' );
		} );

		it( 'switches the color mode correcly', () => {
			const { getByText } = renderWithProvider(
				<ThemeConsumer>
					{( { theme, switchColorMode } ) => (
						<ModeChanger theme={theme} switchColorMode={switchColorMode} />
					)}
				</ThemeConsumer>
			);

			expect( getByText( /^Theme color mode:/ ) ).toHaveTextContent( 'Theme color mode: dark' );
		} );
	} );
} );
