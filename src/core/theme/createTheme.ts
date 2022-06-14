import Palette from '../palette/Palette';
import Theme from './Theme';
import type { PaletteConfig } from '../palette/types';
import type { TypographyConfig } from '../typography/types';
import Typography from '../typography/Typography';

type CreateThemeProps = {
	palette: PaletteConfig,
	typography: TypographyConfig
}

const createTheme = ( { palette, typography }: CreateThemeProps ): Theme => (
	new Theme( {
		palette: new Palette( palette ),
		typography: new Typography( typography )
	} )
);

export default createTheme;
