import * as React from 'react';

import { Alert, StyleSheet, View } from 'react-native';
import {
	Banner, Icon, UIKitIcon, VStack, Text
} from '@amalgama/embassy-ui';

const styles = StyleSheet.create( {
	container: {
		marginBottom: 20
	},
	separator: {
		height: 1,
		minWidth: '100%',
		marginTop: 2,
		marginBottom: 6,
		backgroundColor: 'black'
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
} );

const onDeletePressed = () => Alert.alert( 'Delete pressed!' );

const BannerExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="headline">Banner Component</Text>
		<View style={styles.vspace} />

		<Banner variant={'error'} onDeletePress={onDeletePressed}>
			Error message
		</Banner>

		<Banner variant={'success'} onDeletePress={onDeletePressed}>
			Success message
		</Banner>

		<Banner variant={'warning'} onDeletePress={onDeletePressed}>
			Warning message
		</Banner>

		<Banner variant={'information'} onDeletePress={onDeletePressed}>
			Information message
		</Banner>

		<Banner variant={'error'} onDeletePress={onDeletePressed}>
			<>This is an <Text
				fontSize={'sm'}
				fontWeight={'bold'}
				textDecorationLine={'underline'}>Example
			</Text> of very long text on a banner.
			</>
		</Banner>

		<Banner
			variant={'warning'}
			onDeletePress={onDeletePressed}
			__labelContainer={{ justifyContent: 'center' }}>
			Center banner text
		</Banner>

		<Banner variant={'warning'} withIcon={false} onDeletePress={onDeletePressed}>
			Banner without an icon
		</Banner>

		<Banner variant={'warning'} withIcon={false}>
			Banner without an icon and a delete icon
		</Banner>

		<Banner
			variant={'information'}
			icon={<Icon name="circle" as={UIKitIcon} />}
			deleteIcon={<Icon name="eye" as={UIKitIcon} />}
			onDeletePress={onDeletePressed}
		>
			Banner with custom icon and custom delete icon
		</Banner>

		<Banner variant={'custom'}>
			Custom variant with custom left icon
		</Banner>
	</VStack>
);

export default BannerExamples;
