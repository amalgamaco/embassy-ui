import React from 'react';
import type { IBannerProps } from './types';
import { HStack } from '../Stack';
import Text from '../Text';
import ConditionalRender from '../../utils/ConditionalRender';
import { useBannerPropsResolver, useDeleteIcon, useBannerIcon } from './hooks';

const Banner = ( {
	children,
	visible = true,
	withIcon = true,
	icon: iconProp,
	deleteIcon: deleteIconProp,
	onDeletePress,
	...props
}: IBannerProps ) => {
	const {
		containerProps, labelProps, textContainerProps, iconProps, deleteIconProps
	} = useBannerPropsResolver( { onDeletePress, ...props } );

	const icon = useBannerIcon( { iconProp, iconProps, variant: props.variant } );
	const deleteIcon = useDeleteIcon( { deleteIconProp, deleteIconProps, onDeletePress } );

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
