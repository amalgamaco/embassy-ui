import React from 'react';
import UIKitIcon from '../../../icons/UIKitIcon';
import { ComponentType, createComponent } from '../../utils/elements';
import ConditionalRender from '../../utils/ConditionalRender';
import { HStack } from '../Stack';
import Text from '../Text';
import type { IFormControlLabelProps } from './types';
import IconButton from '../IconButton';
import type { IIconButtonProps } from '../IconButton/types';

const defaultInfoIcon = <IconButton as={UIKitIcon} name="question-circle" />;

const FormControlLabel = ( {
	text,
	isRequired = false,
	infoIcon = defaultInfoIcon,
	onInfoIconPress,
	onInfoIconHoverIn,
	onInfoIconHoverOut,
	showInfoIcon = false,
	__infoIcon: infoIconProps,
	__required: requiredProps,
	testID,
	...props
}: IFormControlLabelProps ) => (
	<HStack space="1" alignContent="flex-start">
		<Text alignSelf="center" testID={testID} {...props}>{text}</Text>
		<ConditionalRender render={isRequired}>
			<Text testID={testID && `${testID}-required`} {...requiredProps}>*</Text>
		</ConditionalRender>
		<ConditionalRender render={showInfoIcon}>
			{
				createComponent( IconButton as ComponentType<IIconButtonProps>, {
					from: infoIcon,
					props: {
						...infoIconProps,
						onPress: onInfoIconPress,
						onHoverIn: onInfoIconHoverIn,
						onHoverOut: onInfoIconHoverOut,
						testID: testID && `${testID}-info-icon`
					}
				} )
			}
		</ConditionalRender>
	</HStack>
);

export default FormControlLabel;
