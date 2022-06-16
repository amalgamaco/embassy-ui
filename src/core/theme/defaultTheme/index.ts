import createTheme from '../createTheme';
import palette from './palette';
import typography from './typography';
import components from './components';

export const config = {
	palette,
	typography,
	components
};

const defaultTheme = createTheme( config );

export default defaultTheme;
