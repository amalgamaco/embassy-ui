import React, { useEffect, useState } from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ThemeProvider, ThemeConsumer } from '../../../src/core/theme/context';

const defaultTheme = {
	palette: {
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
};

const renderWithProvider = ( ui, { providerProps, ...renderOptions } = {} ) => render(
	<ThemeProvider theme={defaultTheme} {...providerProps}>{ui}</ThemeProvider>,
	renderOptions
);

const ThemeInfo = ( { theme } ) => (
	<>
		<Text>Theme primary color: {theme.color( 'primary.300' ) }</Text>
		<Text>Theme color mode: {theme.colorMode }</Text>
	</>
);

const ModeChanger = ( { theme, switchColorMode } ) => {
	useEffect( () => {
		switchColorMode( 'dark' );
	}, [] );

	return <ThemeInfo theme={theme} />;
};

const ThemeChanger = () => {
	const [ customTheme, setCustomTheme ] = useState( defaultTheme );

	useEffect( () => {
		setTimeout( () => {
			act( () => {
				setCustomTheme( {
					...customTheme,
					...{
						palette: {
							...customTheme.palette,
							base: {
								...customTheme.palette.base,
								primary: {
									...customTheme.palette.base.primary,
									300: '#FFAAFF'
								}
							}
						}
					}
				} );
			} );
		}, 1 );
	}, [] );

	return (
		<ThemeProvider theme={customTheme}>
			<ThemeConsumer>
				{( { theme } ) => <ThemeInfo theme={theme} />}
			</ThemeConsumer>
		</ThemeProvider>
	);
};

describe( 'ThemeContext', () => {
	describe( 'Consumer', () => {
		it( 'returns the correct theme', () => {
			const { getByText } = renderWithProvider(
				<ThemeConsumer>
					{( { theme } ) => <ThemeInfo theme={theme} />}
				</ThemeConsumer>
			);

			expect( getByText( /^Theme primary color:/ ) ).toHaveTextContent( 'Theme primary color: #a066e8' );
			expect( getByText( /^Theme color mode:/ ) ).toHaveTextContent( 'Theme color mode: light' );
		} );

		it( 're-renders when the passed theme changes', async () => {
			const { getByText } = render( <ThemeChanger /> );

			await waitFor( () => {
				expect( getByText( /^Theme primary color:/ ) ).toHaveTextContent( 'Theme primary color: #FFAAFF' );
				expect( getByText( /^Theme color mode:/ ) ).toHaveTextContent( 'Theme color mode: light' );
			} );
		} );

		it( 'sets the correct initial color mode', () => {
			const { getByText } = renderWithProvider(
				<ThemeConsumer>
					{( { theme } ) => <ThemeInfo theme={theme} />}
				</ThemeConsumer>,
				{ providerProps: { colorMode: 'dark' } }
			);

			expect( getByText( /^Theme color mode:/ ) ).toHaveTextContent( 'Theme color mode: dark' );
		} );

		it( 'switches the color mode correcly', async () => {
			const { getByText } = renderWithProvider(
				<ThemeConsumer>
					{( { theme, switchColorMode } ) => (
						<ModeChanger theme={theme} switchColorMode={switchColorMode} />
					)}
				</ThemeConsumer>
			);

			await waitFor( () => {
				expect( getByText( /^Theme color mode:/ ) ).toHaveTextContent( 'Theme color mode: dark' );
			}, { timeout: 1000 } );
		} );
	} );
} );
