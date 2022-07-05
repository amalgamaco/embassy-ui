/* eslint-disable @typescript-eslint/ban-types */
import { merge } from 'lodash';
import defaultTheme from './defaultTheme';
import type { ThemeConfig } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThemeConfigUtil = ThemeConfig | ( Record<string, any> & {} );

const extendThemeConfig = <T extends ThemeConfigUtil>(
	themeConfig: T
): T & ThemeConfig => ( merge( {}, defaultTheme, themeConfig ) );

export default extendThemeConfig;
