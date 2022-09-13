import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgIconProps } from './types';

export default function BoxChecked( { height, width, color }: SvgIconProps ) {
	return <Svg width={width} height={height} color={color} viewBox="0 0 24 24"
		fill="none" xmlns="http://www.w3.org/2000/svg">
		<Path d="M20 11.83C19.7348 11.83 19.4804 11.9354 19.2929 12.1229C19.1054 12.3104 19 12.5648 19 12.83V18.4C19 18.5591 18.9368 18.7117 18.8243 18.8243C18.7117 18.9368 18.5591 19 18.4 19H5.6C5.44087 19 5.28826 18.9368 5.17574 18.8243C5.06321 18.7117 5 18.5591 5 18.4V5.6C5 5.44087 5.06321 5.28826 5.17574 5.17574C5.28826 5.06321 5.44087 5 5.6 5H15.17C15.4352 5 15.6896 4.89464 15.8771 4.70711C16.0646 4.51957 16.17 4.26522 16.17 4C16.17 3.73478 16.0646 3.48043 15.8771 3.29289C15.6896 3.10536 15.4352 3 15.17 3H5.6C4.91125 3.00263 4.25146 3.27741 3.76443 3.76443C3.27741 4.25146 3.00263 4.91125 3 5.6V18.4C3.00263 19.0888 3.27741 19.7485 3.76443 20.2356C4.25146 20.7226 4.91125 20.9974 5.6 21H18.4C19.0888 20.9974 19.7485 20.7226 20.2356 20.2356C20.7226 19.7485 20.9974 19.0888 21 18.4V12.83C21 12.5648 20.8946 12.3104 20.7071 12.1229C20.5196 11.9354 20.2652 11.83 20 11.83Z" fill={color}/>
		<Path d="M10.7204 11.0001C10.5328 10.8313 10.2883 10.7397 10.0359 10.7437C9.78357 10.7477 9.54207 10.847 9.35985 11.0216C9.17764 11.1962 9.06819 11.4333 9.05346 11.6852C9.03874 11.9372 9.11982 12.1854 9.28045 12.3801L11.5004 14.7101C11.5934 14.8076 11.7051 14.8853 11.8288 14.9386C11.9525 14.9918 12.0857 15.0195 12.2204 15.0201C12.3544 15.0208 12.4872 14.9947 12.6109 14.9432C12.7346 14.8916 12.8467 14.8158 12.9404 14.7201L19.7204 7.72006C19.8124 7.62551 19.8848 7.51378 19.9335 7.39124C19.9823 7.26871 20.0064 7.13778 20.0045 7.00592C20.0027 6.87406 19.9749 6.74386 19.9227 6.62275C19.8705 6.50163 19.795 6.39199 19.7004 6.30006C19.6059 6.20814 19.4942 6.13573 19.3716 6.08699C19.2491 6.03824 19.1182 6.01411 18.9863 6.01597C18.8544 6.01783 18.7242 6.04564 18.6031 6.09781C18.482 6.14999 18.3724 6.22551 18.2804 6.32006L12.2304 12.5801L10.7204 11.0001Z" fill={color}/>
	</Svg>;
}
