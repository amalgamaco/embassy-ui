import AntDesignFont from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import EntypoFont from 'react-native-vector-icons/Fonts/Entypo.ttf';
import EvilIconsFont from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import FeatherFont from 'react-native-vector-icons/Fonts/Feather.ttf';
import FontAwesomeFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import FontistoFont from 'react-native-vector-icons/Fonts/Fontisto.ttf';
import FoundationFont from 'react-native-vector-icons/Fonts/Foundation.ttf';
import IoniconsFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialCommunityIconsFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import OcticonsFont from 'react-native-vector-icons/Fonts/Octicons.ttf';
import ZocialFont from 'react-native-vector-icons/Fonts/Zocial.ttf';
import SimpleLineIconsFont from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';

const addFontFileToHeader = ( fontName, fontUrl ) => {
	const iconFontStyles = `@font-face {
		font-family: ${fontName};
		src: url(${fontUrl});
	}`;

	// Create stylesheet
	const style = document.createElement( 'style' );
	style.type = 'text/css';
	if ( style.styleSheet ) {
		style.styleSheet.cssText = iconFontStyles;
	} else {
		style.appendChild( document.createTextNode( iconFontStyles ) );
	}

	// Inject stylesheet
	document.head.appendChild( style );
};

const FONTS = [
	[ 'AntDesign', AntDesignFont ],
	[ 'Entypo', EntypoFont ],
	[ 'EvilIcons', EvilIconsFont ],
	[ 'Feather', FeatherFont ],
	[ 'FontAwesome', FontAwesomeFont ],
	[ 'Fontisto', FontistoFont ],
	[ 'Foundation', FoundationFont ],
	[ 'Ionicons', IoniconsFont ],
	[ 'MaterialCommunityIcons', MaterialCommunityIconsFont ],
	[ 'Octicons', OcticonsFont ],
	[ 'Zocial', ZocialFont ],
	[ 'SimpleLineIcons', SimpleLineIconsFont ]
];

if ( typeof window !== 'undefined' ) {
	FONTS.forEach(
		( [ fontName, fontUrl ] ) => addFontFileToHeader( fontName, fontUrl )
	);
}
