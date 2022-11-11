import * as React from 'react';

import { StyleSheet } from 'react-native';
import {
	VStack, Text, Box, Button, Dialog, HStack
} from '@amalgama/embassy-ui';

const styles = StyleSheet.create( {
	container: {
		marginBottom: 20
	}
} );

const SecondDialogExample = () => {
	const [ isModalVisible, setIsModalVisible ] = React.useState( false );

	return (
		<VStack style={styles.container} space="2">
			<Box flex={1} justifyContent={'center'}>
				<Button borderWidth={'2xs'} onPress={() => setIsModalVisible( true )} textAlign={'center'}>
				Dialog Example - High priority variant
				</Button>
			</Box>

			<Dialog
				variant={'high_priority'}
				isVisible={isModalVisible}
				onClosePress={() => setIsModalVisible( false )}
			>
				<Dialog.Header title={'Title'} />

				<Dialog.Body>
					<Text variant={'body'} textAlign={'center'}>
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

export default SecondDialogExample;
