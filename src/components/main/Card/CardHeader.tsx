import React from 'react';
import ConditionalRender from '../../utils/ConditionalRender';
import Avatar from '../Avatar';
import { HStack, VStack } from '../Stack';
import Text from '../Text';
import useCardHeaderPropsResolver from './hooks';
import type { ICardHeaderProps } from './types';

const CardHeaderBase = ( {
	avatar, title, subtitle, rightActions, testID, ...props
}: ICardHeaderProps ) => {
	const {
		containerProps, infoContainerProps, rightActionsContainerProps,
		avatarProps, titleProps, subtitleProps
	} = useCardHeaderPropsResolver( props );
	return (
		<HStack {...containerProps} testID={testID}>
			<HStack {...infoContainerProps} >
				<ConditionalRender render={!!avatar}>
					<Avatar
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						source={avatar!}
						testID={testID && `${testID}-avatar`}
						{...avatarProps}
					/>
				</ConditionalRender>
				<VStack>
					<Text variant="body-special" textAlign='left' {...titleProps}>{title}</Text>
					<Text variant="small" textAlign='left' {...subtitleProps}>{subtitle}</Text>
				</VStack>
			</HStack>
			<HStack {...rightActionsContainerProps}>
				<ConditionalRender render={!!rightActions}>
					{rightActions as JSX.Element[]}
				</ConditionalRender>
			</HStack>
		</HStack>
	);
};

export default CardHeaderBase;
