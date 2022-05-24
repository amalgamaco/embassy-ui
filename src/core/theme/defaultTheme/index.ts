import createTheme from '../createTheme';
import palette from './palette';
import typography from './typography';

export const config = {
	palette,
	typography
};

const defaultTheme = createTheme( config );

export default defaultTheme;
