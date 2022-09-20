import React, { cloneElement } from 'react';
import UIKitIcon from '../../../icons/UIKitIcon';
import Icon from '../Icon';
import Text from '../Text';
import Pressable from '../Pressable';
import { HStack } from '../Stack';
import { useCheckboxPropsResolver } from './hooks';
import type { ICheckboxProps } from './types';
import Box from '../Box';

const defaultCheckedIcon = <Icon as={UIKitIcon} name="box-checked" />;

const defaultUncheckedIcon = <Icon as={UIKitIcon} name="box-unchecked" />;

const defaultIndeterminatedIcon = <Icon as={UIKitIcon} name="box-indeterminated" />;

const selectIcon = ( isSelected: boolean, isIndeterminated: boolean, checkedIcon: JSX.Element,
	uncheckedIcon: JSX.Element, indeterminatedIcon: JSX.Element ) => {
	if ( isIndeterminated ) return indeterminatedIcon;
	if ( isSelected ) return checkedIcon;
	return uncheckedIcon;
};

const Checkbox = ( {
	label,
	isSelected = false,
	isIndeterminated = false,
	checkedIcon = defaultCheckedIcon,
	uncheckedIcon = defaultUncheckedIcon,
	indeterminatedIcon = defaultIndeterminatedIcon,
	testID,
	...props
}: ICheckboxProps ) => {
	const {
		iconProps,
		iconContainerProps,
		labelProps,
		containerProps
	} = useCheckboxPropsResolver( {
		isIndeterminated, isSelected, ...props
	} );

	const icon = selectIcon(
		isSelected,
		isIndeterminated,
		checkedIcon,
		uncheckedIcon,
		indeterminatedIcon );

	return (
		<Pressable
			accessible
			accessibilityRole='checkbox'
			accessibilityLabel={label}
			accessibilityState={{
				checked: isIndeterminated ? 'mixed' : isSelected,
				disabled: props.disabled || false
			}}
			testID={testID}
			{...containerProps}
		>
			<HStack space="0.5" alignItems="center" alignContent="flex-start">
				<Box {...iconContainerProps}>
					{cloneElement( icon, {
						...iconProps,
						testID: testID && `${testID}-icon`
					} )}
				</Box>
				{!!label && (
					<Text
						{...labelProps}
						selectable={false}
						testID={testID && `${testID}-label`}
					>
						{label}
					</Text>
				)}
			</HStack>
		</Pressable>
	);
};

export default Checkbox;
