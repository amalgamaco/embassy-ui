/* eslint-disable no-alert */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

import {
	IconButton, VStack, Text
} from '@amalgama/react-native-ui-kit';

const styles = StyleSheet.create( {
	container: {
		marginBottom: 20
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
} );

const onPressRed = () => window.alert( 'You pressed the red heart' );
const onPressBlack = () => window.alert( 'You pressed the black heart' );

const IconButtonExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="h1" bgColor="primary.200">IconButton Component</Text>
		<View style={styles.vspace} />
		<IconButton
			name='heart'
			onPress={onPressRed}
			__icon={{ size: '3xl', color: 'error.900' }}
			mx={1}
		/>
		<IconButton
			name='heart'
			onPress={onPressBlack}
			as={Octicons}
			__icon={{ size: 'xl' }}
		/>
	</VStack>
);

export default IconButtonExamples;
