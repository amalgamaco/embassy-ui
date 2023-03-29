import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useThemeColorModeSwtich } from '@amalgamaco/embassy-ui';

const ColorModeToggler = () => {
	const switchColorMode = useThemeColorModeSwtich();
	const colorMode = useColorScheme();

	useEffect( () => {
		switchColorMode?.( colorMode || 'light' );
	}, [ colorMode, switchColorMode ] );

	return ( <></> );
};

export default ColorModeToggler;
