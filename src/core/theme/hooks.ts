import { useContext } from 'react';
import { ThemeContext } from './context';

export const useTheme = () => {
	const context = useContext( ThemeContext );
	return context?.theme;
};

export const useThemeColorModeSwtich = () => {
	const context = useContext( ThemeContext );
	return context?.switchColorMode;
};
