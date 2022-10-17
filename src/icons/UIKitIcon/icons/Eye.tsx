import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SVGIconProps } from './types';

const Eye = ( { color, ...props }: SVGIconProps ) => (
	<Svg color={color} viewBox="0 0 24 24" fill="none" {...props}>
		<Path d="M21.8699 11.5001C21.2299 10.3901 17.7099 4.82012 11.7299 5.00012C6.19995 5.14012 2.99995 10.0001 2.12995 11.5001C2.04218 11.6521 1.99597 11.8246 1.99597 12.0001C1.99597 12.1757 2.04218 12.3481 2.12995 12.5001C2.75995 13.5901 6.12995 19.0001 12.0199 19.0001H12.2699C17.7999 18.8601 21.0099 14.0001 21.8699 12.5001C21.9577 12.3481 22.0039 12.1757 22.0039 12.0001C22.0039 11.8246 21.9577 11.6521 21.8699 11.5001ZM12.2199 17.0001C7.90995 17.1001 5.09995 13.4101 4.21995 12.0001C5.21995 10.3901 7.82995 7.10012 11.8299 7.00012C16.1199 6.89012 18.9399 10.5901 19.8299 12.0001C18.7999 13.6101 16.2199 16.9001 12.2199 17.0001Z" fill={color} />
		<Path d="M12 8.5C11.3078 8.5 10.6311 8.70527 10.0555 9.08986C9.47993 9.47444 9.03133 10.0211 8.76642 10.6606C8.50152 11.3001 8.4322 12.0039 8.56725 12.6828C8.7023 13.3618 9.03564 13.9854 9.52513 14.4749C10.0146 14.9644 10.6383 15.2977 11.3172 15.4327C11.9961 15.5678 12.6999 15.4985 13.3394 15.2336C13.9789 14.9687 14.5256 14.5201 14.9101 13.9445C15.2947 13.3689 15.5 12.6922 15.5 12C15.5 11.0717 15.1313 10.1815 14.4749 9.52513C13.8185 8.86875 12.9283 8.5 12 8.5ZM12 13.5C11.7033 13.5 11.4133 13.412 11.1666 13.2472C10.92 13.0824 10.7277 12.8481 10.6142 12.574C10.5007 12.2999 10.4709 11.9983 10.5288 11.7074C10.5867 11.4164 10.7296 11.1491 10.9393 10.9393C11.1491 10.7296 11.4164 10.5867 11.7074 10.5288C11.9983 10.4709 12.2999 10.5006 12.574 10.6142C12.8481 10.7277 13.0824 10.92 13.2472 11.1666C13.412 11.4133 13.5 11.7033 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5Z" fill={color} />
	</Svg>
);

export default Eye;
