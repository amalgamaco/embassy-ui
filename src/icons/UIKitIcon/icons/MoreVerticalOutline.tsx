import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SVGIconProps } from './types';

const MoreVerticalOutline = ( { color, ...rest }: SVGIconProps ) => (
	<Svg viewBox="0 0 24 24" fill="none" {...rest} >
		<Path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill={color} />
		<Path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" fill={color} />
		<Path d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" fill={color} />
	</Svg>
);

export default MoreVerticalOutline;
