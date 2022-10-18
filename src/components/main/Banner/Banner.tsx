import React from 'react';
import type { IBannerProps } from './types';
import { HStack } from '../Stack';
import Text from '../Text';
import useBannerIcon from './hooks/useBannerIcon';
import ConditionalRender from '../../utils/ConditionalRender';
import { useBannerPropsResolver, useDeleteIcon } from './hooks';

const Banner = ( {
	children,
	visible = true,
	withIcon = true,
	...props
}: IBannerProps ) => {
	const {
		containerProps, labelProps, textContainerProps, iconProps, deleteIconProps
	} = useBannerPropsResolver( props );

	const icon = useBannerIcon( { props, iconProps } );
	const deleteIcon = useDeleteIcon( { props, deleteIconProps } );

	return (
		<ConditionalRender render={visible}>
			<HStack {...containerProps} testID={props.testID}>
				<ConditionalRender render={withIcon}>
					<HStack>{icon}</HStack>
				</ConditionalRender>

				<HStack {...textContainerProps}>
					<Text {...labelProps} style={{ flexWrap: 'wrap' }}>
						{children}
					</Text>
				</HStack>

				<HStack>
					{deleteIcon}
				</HStack>
			</HStack>
		</ConditionalRender>
	);
};

export default Banner;
