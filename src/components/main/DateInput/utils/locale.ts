/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NativeModules, Platform } from 'react-native';

const getCurrentLocaleCodeiOS = () => (
	NativeModules.SettingsManager.settings.AppleLocale
		|| NativeModules.SettingsManager.settings.AppleLanguages[ 0 ]
) as string;

const getCurrentLocaleCodeAndroid = () => (
	NativeModules.I18nManager.localeIdentifier
) as string;

const getcurrentLocaleCodeWeb = () => (
	window.navigator.language
);

export const getCurrentLocaleCode = () => (
	Platform.select( {
		ios: getCurrentLocaleCodeiOS,
		android: getCurrentLocaleCodeAndroid,
		web: getcurrentLocaleCodeWeb
	} )?.() || ''
);

const FORMAT_UNIT_BY_FORMAT_PART: Partial<Record<
	Intl.DateTimeFormatPartTypes, string
>> = Object.freeze( {
	'day': 'd',
	'month': 'M',
	'year': 'y'
} );

export const getDateFormatPatternForLocale = ( locale: string ) => (
	new Intl.DateTimeFormat( locale )
		.formatToParts( new Date( '2000-01-01' ) )
		.map( ( part: Intl.DateTimeFormatPart ) => {
			const formatUnit = FORMAT_UNIT_BY_FORMAT_PART[ part.type ];
			if ( !formatUnit ) { return part.value; }
			return formatUnit.repeat( Math.max( part.value.length, 2 ) ) || part.value;
		} )
		.join( '' )
);
