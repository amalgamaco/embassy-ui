import React, { forwardRef } from 'react';
import { Image as ImageRN } from 'react-native';
import { useComponentPropsResolver, useStyleFromPropsResolver } from '../../../hooks';
import type { IImageProps } from './types';

const Image = ( props: IImageProps, ref?: React.Ref<ImageRN> ) => {
	const resolvedProps = useComponentPropsResolver( 'Image', props );
	const [ style, restProps ] = useStyleFromPropsResolver(
		'Image', resolvedProps
	);
	return (
		<ImageRN
			ref={ref}
			style={style}
			{...restProps}
		/> );
};
export default forwardRef( Image );
