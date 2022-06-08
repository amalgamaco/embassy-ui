import React from 'react';
import { ThemeProvider } from '../../src/core/theme/context';

const WithThemeProvider = ( { children } ) => (
	<ThemeProvider>
		{children}
	</ThemeProvider>
);

export default WithThemeProvider;
