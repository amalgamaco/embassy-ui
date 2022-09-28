import React from 'react';
import { Icon } from '@amalgama/react-native-ui-kit';
import { Svg, Path } from 'react-native-svg';

const CustomIcon = () => (
	<Icon
		as={( { size, color } ) => (
			<Svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
			>
				<Path
					d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z"
					fill={color}
				/>
			</Svg>
		)}
		size="xl"
		color="black"
		name="custom-icon"
	/> );

export default CustomIcon;
