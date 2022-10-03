import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { SVGIconProps } from './types';

const CircleOutilned = ( { color, ...props }: SVGIconProps ) => (
	<Svg color={color} viewBox="0 0 20 20" fill="none" {...props}>
		<Circle cx="10" cy="10" r="9" stroke={color} strokeWidth="2"/>
	</Svg>
);

export default CircleOutilned;
