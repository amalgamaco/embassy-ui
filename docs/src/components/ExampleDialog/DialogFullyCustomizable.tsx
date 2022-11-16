import * as React from 'react';
import {
	VStack, Text, Box, Button, Dialog, HStack, UIKitIcon, Icon
} from '@amalgama/embassy-ui';

const DialogFullyCustomizable = ( { buttonText, ...props } ) => {
	const [ isModalVisible, setIsModalVisible ] = React.useState( false );

	return (
		<VStack>
			<Box flex={1} justifyContent={'center'}>
				<Button borderWidth={0} onPress={() => setIsModalVisible( true )} textAlign={'center'}>
					{ buttonText || 'Dialog Example'}
				</Button>
			</Box>

			<Dialog
				variant={'high-priority'}
				isVisible={isModalVisible}
				icon={<Icon name="circle" as={UIKitIcon} />}
				closeIcon={<Icon name="alert-triangle" as={UIKitIcon} />}
				backdropOpacity={0.5}
				animationInTiming={1000}
				animationIn={'swing'}
				bg={'primary.300'}
				__icon={{ size: '2xl' }}
				__closeIcon={{ color: 'white' }}
				__title={{ color: 'error.900' }}
				onClosePress={() => setIsModalVisible( false )}
				{...props}
			>
				<Dialog.Header title={'Dialog fully customizable'} />

				<Dialog.Body>
					<Text variant={'body'} textAlign={'center'} color={'white'} fontWeight={'bold'}>
						Are you sure you want to leave?
					</Text>
					<Text variant={'body'} textAlign={'center'} color={'white'}>
						All the changes saved will {'\n'} be discarded
					</Text>
				</Dialog.Body>

				<Dialog.Footer>
					<HStack space={8} marginBottom={5} marginTop={5} alignItems={'center'}>

						<Button
							variant={'secondary'}
							onPress={() => setIsModalVisible( false )}
							width={110}
							bg={'transparent'}
							padding={4}
							__label={{ color: 'white' }}
							borderColor={'white'}
						>
							No
						</Button>

						<Button
							variant={'priority'}
							onPress={() => setIsModalVisible( false )}
							width={110}
							padding={4}
						>
							Yes
						</Button>
					</HStack>
				</Dialog.Footer>
			</Dialog>
		</VStack> );
};

export default DialogFullyCustomizable;
