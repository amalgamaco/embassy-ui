import Theme from './Theme';
import Palette from '../palette/Palette';
import Typography from '../typography/Typography';
import Components from '../components/Components';
import type { PaletteConfig } from '../palette/types';
import type { TypographyConfig } from '../typography/types';
import type { ComponentsConfig } from '../components/types';
import type { LayoutConfig } from '../layout/types';
import Layout from '../layout/Layout';
import type { ColorMode } from '../types';

type CreateThemeProps = {
	palette: PaletteConfig,
	typography: TypographyConfig,
	layout: LayoutConfig,
	components: ComponentsConfig,
	colorMode?: ColorMode
}

const createTheme = ( {
	palette, typography, layout, components, colorMode
}: CreateThemeProps ): Theme => (
	new Theme( {
		palette: new Palette( palette ),
		typography: new Typography( typography ),
		layout: new Layout( layout ),
		components: new Components( components ),
		colorMode
	} )
);

export default createTheme;
