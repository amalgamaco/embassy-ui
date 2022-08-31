import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { SvgIconProps } from './SvgIconProps';

function EmptyRadioButton( { width, height, color } :SvgIconProps ) {
	const svgProps = {
		width,
		height,
		viewBox: '0 0 20 20',
		fill: 'none',
		xmlns: 'http://www.w3.org/2000/svg'
	};
	return (
		<Svg {...svgProps}>
			<Circle cx="10" cy="10" r="9" stroke={color} strokeWidth="2"/>
		</Svg>

	);
}
export default EmptyRadioButton;
