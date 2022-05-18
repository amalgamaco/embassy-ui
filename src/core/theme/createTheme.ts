import type { PaletteColorsConfig } from '../palette/types';
import Palette from '../palette/Palette';
import Theme from './Theme';

const createTheme = ( { palette }:{ palette: PaletteColorsConfig } ): Theme => (
	new Theme( { palette: new Palette( palette ) } )
);

export default createTheme;
