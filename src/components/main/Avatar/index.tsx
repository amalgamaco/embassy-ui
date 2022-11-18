import React from 'react';
import Box from '../Box';
import Image from '../Image';
import useAvatarPropsResolver from './hooks';
import type { IAvatarProps } from './types';

const Avatar = ( {
	source, alt, testID, ...props
}: IAvatarProps ) => {
	const { avatarProps, imageProps } = useAvatarPropsResolver( props );
	const accessibilityLabel = alt ? `${alt}'s avatar` : 'Avatar';
	return (
		<Box
			{...avatarProps}
			testID={testID}
			accessible
			accessibilityRole="image"
			accessibilityLabel={accessibilityLabel}
		>
			<Image source={ source } {...imageProps} />
		</Box>
	);
};

export default Avatar;
