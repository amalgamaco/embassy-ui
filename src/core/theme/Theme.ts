import type Palette from '../palette/Palette';
import type { ColorMode } from '../types';
import type { PaletteColor } from '../palette/types';
import StyleProps from '../styles/StyleProps';
import type { ComponentProps, Style } from '../styles/types';
import type Typography from '../typography/Typography';
import type {
	FontFamilyVariant, FontName, FontSize, FontSizeAlias,
	FontWeight, FontWeightAlias, LetterSpacing,
	LetterSpacingAlias, LineHeight, LineHeightAlias
} from '../typography/types';
import type Components from '../components/Components';
import type {
	ComponentName, ComponentState, ComponentStyledProps, VariantName
} from '../components/types';
import type Layout from '../layout/Layout';
import type {
	BorderWidth,
	BorderWidthAlias,
	Radius, RadiusAlias, Spacing, SpacingAlias
} from '../layout/types';

interface ThemeConstructorParams {
	palette: Palette,
	typography: Typography,
	layout: Layout,
	components: Components,
	colorMode?: ColorMode
}

export default class Theme {
	private _palette: Palette;
	private _typography: Typography;
	private _layout: Layout;
	private _components: Components;
	private _colorMode: ColorMode;

	constructor( {
		palette, typography, layout, components,
		colorMode = 'light'
	}: ThemeConstructorParams ) {
		this._palette = palette;
		this._typography = typography;
		this._layout = layout;
		this._components = components;
		this._colorMode = colorMode;
	}

	get palette() { return this._palette; }
	get typography() { return this._typography; }
	get layout() { return this._layout; }
	get components() { return this._components; }

	get colorMode() { return this._colorMode; }

	get statusBarStyle() {
		return this._colorMode === 'light'
			? 'dark-content'
			: 'light-content';
	}

	// Palette (delegation)
	color( name: PaletteColor ): string | undefined {
		const { colorMode } = this;
		return this._palette.colorFor( name, { colorMode } );
	}

	// Typography (delegation)
	font(
		name: FontName,
		{ weight, variant }: { weight?: FontWeightAlias, variant?: FontFamilyVariant } = {}
	): FontName | undefined {
		return this._typography.font( name, { weight, variant } );
	}

	letterSpacing( alias: LetterSpacingAlias ): LetterSpacing | undefined {
		return this._typography.letterSpacing( alias );
	}

	lineHeight( alias: LineHeightAlias ): LineHeight | undefined {
		return this._typography.lineHeight( alias );
	}

	fontWeight( alias: FontWeightAlias ): FontWeight | undefined {
		return this._typography.fontWeight( alias );
	}

	fontSize( alias: FontSizeAlias ): FontSize | undefined {
		return this._typography.fontSize( alias );
	}

	// Layout (delegation)
	borderWidth( alias: BorderWidthAlias ): BorderWidth | undefined {
		return this._layout.borderWidth( alias );
	}

	spacing( alias: SpacingAlias ): Spacing | undefined {
		return this._layout.spacing( alias );
	}

	radius( alias: RadiusAlias ): Radius | undefined {
		return this._layout.radius( alias );
	}

	// Config
	get config() {
		return {
			colorMode: this.colorMode,
			palette: this._palette.config,
			layout: this._layout.config,
			components: this._components.config,
			typography: this._typography.config
		};
	}

	// Props resolution
	defaultPropsFor( componentName: ComponentName ) {
		return this._components.defaultPropsFor( componentName );
	}

	variantPropsFor( componentName: ComponentName, variantName: VariantName ) {
		return this._components.variantPropsFor( componentName, variantName );
	}

	sizeFor( componentName: ComponentName, alias: string | number ): string | number | undefined {
		return this._components.sizeFor( componentName, alias );
	}

	resolvePropsFor(
		componentName: ComponentName,
		props: ComponentStyledProps<ComponentName>,
		state?: ComponentState
	) {
		return this._components.resolvePropsFor( componentName, props, state );
	}

	// Style
	styleForProps( props: ComponentProps ): Style {
		return new StyleProps( { props, transformer: this } ).style;
	}
}
