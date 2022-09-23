import React from 'react';
import FakeBaseIcon from './FakeBaseIcon';
import { extendThemeConfig, ThemeProvider } from '../../src';

const theme = extendThemeConfig( {
	components: {
		Icon: {
			defaultProps: {
				as: FakeBaseIcon
			}
		}
	}
} );

const WithThemeProvider = ( { children } ) => (
	<ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
);

export default WithThemeProvider;
