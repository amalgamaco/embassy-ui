import React from 'react';
import Svg from 'react-native-svg';
import type { SVGIconProps } from './types';

const SVGIcon = ( {
	children, width, height, ...props
}: SVGIconProps ) => (
	<Svg
		width={width}
		height={height}
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		{children}
	</Svg>

);

export default SVGIcon;
