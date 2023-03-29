import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
	Banner, Icon, UIKitIcon, VStack, Text
} from '@amalgamaco/embassy-ui';

const styles = StyleSheet.create( {
	container: {
		marginBottom: 20
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
} );

const onDeletePressed = () => alert( 'Delete pressed!' );

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
				Only for testing purpose
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
	</VStack>
);

export default BannerExamples;
