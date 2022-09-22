import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { SVGIconProps } from './types';

const CircleFilled = ( { color, ...rest }: SVGIconProps ) => (
	<Svg color={color} viewBox="0 0 20 20" fill="none" {...rest} >
		<Circle cx="10" cy="10" r="9" stroke={color} strokeWidth="2"/>
		<Circle cx="10" cy="10" r="5" fill={color}/>
	</Svg>
);

export default CircleFilled;
