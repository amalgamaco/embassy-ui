import React, { useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
import type { ColorMode } from '../types';
import type Theme from './Theme';
import defaultTheme from './defaultTheme';

type ThemeContextValue = {
	theme: Theme,
	switchColorMode: ( colorMode: ColorMode ) => void
}

type ThemeProviderProps = {
	children: React.ReactNode,
	theme?: Theme
}

export const ThemeContext = React.createContext<ThemeContextValue | undefined>( undefined );

export const ThemeProvider = ( { children, theme: initialTheme }: ThemeProviderProps ) => {
	const [ theme, setTheme ] = useState( initialTheme || defaultTheme );

	const switchColorMode = useCallback( ( colorMode: ColorMode ) => {
		setTheme( theme.switchColorMode( colorMode ) );
	}, [ theme, setTheme ] );

	return (
		<ThemeContext.Provider value={{ theme, switchColorMode }}>
			<StatusBar barStyle={theme.statusBarStyle} />
			{children}
		</ThemeContext.Provider>
	);
};

export const ThemeConsumer = ThemeContext.Consumer;
