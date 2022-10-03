import React, { useEffect } from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ThemeProvider } from '../../../src/core/theme/context';
import { useTheme, useThemeColorModeSwtich } from '../../../src/core/theme/hooks';

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

const UseThemeHookTestComponent = () => {
	const theme = useTheme();

	return (
		<Text>Theme primary color: {theme.color( 'primary.300' ) }</Text>
	);
};

const UseThemeColorModeSwtichHookTestcomponent = () => {
	const theme = useTheme();
	const switchColorMode = useThemeColorModeSwtich();

	useEffect( () => {
		switchColorMode( 'dark' );
	}, [ switchColorMode ] );

	return ( <Text>Theme color mode: {theme.colorMode }</Text> );
};

describe( 'hooks', () => {
	describe( 'useTheme', () => {
		it( 'returns the correct theme', () => {
			const { getByText } = renderWithProvider(
				<UseThemeHookTestComponent />
			);

			expect( getByText( /^Theme primary color:/ ) ).toHaveTextContent( 'Theme primary color: #a066e8' );
		} );
	} );

	describe( 'useThemeColorModeSwtich', () => {
		it( 'returns a function that switches the color mode correctly', () => {
			const { getByText } = renderWithProvider(
				<UseThemeColorModeSwtichHookTestcomponent />
			);

			expect( getByText( /^Theme color mode:/ ) ).toHaveTextContent( 'Theme color mode: dark' );
		} );
	} );
} );
