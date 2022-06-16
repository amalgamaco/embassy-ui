import createTheme from '../createTheme';
import palette from './palette';
import typography from './typography';
import layout from './layout';
import components from './components';

export const config = {
	palette,
	typography,
	layout,
	components
};

const defaultTheme = createTheme( config );

export default defaultTheme;
