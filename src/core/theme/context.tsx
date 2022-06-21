import React, { useCallback, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import type { ColorMode } from '../types';
import defaultTheme from './defaultTheme';
import type { IThemeConfig } from './types';
import createTheme from './createTheme';
import type Theme from './Theme';

type ThemeContextValue = {
	theme: Theme,
	switchColorMode: ( colorMode: ColorMode ) => void
}

type ThemeProviderProps = {
	children: React.ReactNode,
	theme?: IThemeConfig,
	colorMode?: ColorMode
}

export const ThemeContext = React.createContext<ThemeContextValue | undefined>( undefined );

export const ThemeProvider = ( {
	children,
	theme: initialTheme,
	colorMode: initialColorMode = 'light'
}: ThemeProviderProps ) => {
	const themeConfig = initialTheme || defaultTheme;
	const [ colorMode, setColorMode ] = useState( initialColorMode );

	const theme: Theme = useMemo( () => createTheme(
		{ ...themeConfig, colorMode }
	), [ themeConfig, colorMode ] );

	const switchColorMode = useCallback( ( selectedColorMode: ColorMode ) => {
		setColorMode( selectedColorMode );
	}, [ setColorMode ] );

	return (
		<ThemeContext.Provider value={{ theme, switchColorMode }}>
			<StatusBar barStyle={theme.statusBarStyle} />
			{children}
		</ThemeContext.Provider>
	);
};

export const ThemeConsumer = ThemeContext.Consumer;
