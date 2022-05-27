import Theme from './Theme';
import Palette from '../palette/Palette';
import Typography from '../typography/Typography';
import Components from '../components/Components';
import type { PaletteConfig } from '../palette/types';
import type { TypographyConfig } from '../typography/types';
import type { ComponentsConfig } from '../components/types';

type CreateThemeProps = {
	palette: PaletteConfig,
	typography: TypographyConfig,
	components: ComponentsConfig
}

const createTheme = ( { palette, typography, components }: CreateThemeProps ): Theme => (
	new Theme( {
		palette: new Palette( palette ),
		typography: new Typography( typography ),
		components: new Components( components )
	} )
);

export default createTheme;
