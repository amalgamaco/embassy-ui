import * as React from 'react';
import {
	VStack, Text, Box, Button, Dialog, HStack
} from '@amalgamaco/embassy-ui';

const DialogHighPriority = ( { buttonText, titleText, ...props } ) => {
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
				onClosePress={() => setIsModalVisible( false )}
				animationIn={'swing'}
				animationInTiming={1000}
				animationOut={'fadeOut'}
				animationOutTiming={500}
				{...props}
			>
				<Dialog.Header title={ titleText || 'Header title'} />

				<Dialog.Body>
					<Text variant={'body'} textAlign={'center'} fontWeight={'medium'}>
						Are you sure you want to leave?
					</Text>
					<Text variant={'body'} textAlign={'center'}>
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
							padding={2}
						>
							No
						</Button>

						<Button
							variant={'priority'}
							onPress={() => setIsModalVisible( false )}
							width={110}
							padding={2}
						>
							Yes
						</Button>
					</HStack>
				</Dialog.Footer>
			</Dialog>
		</VStack> );
};

export default DialogHighPriority;
