import React from 'react';
import { StyleSheet } from 'react-native';

import {
	VStack, HStack, Text, Switch
} from '@amalgama/embassy-ui';

const styles = StyleSheet.create( {
	container: {
		marginBottom: 20
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
} );

const onChange = ( prev: boolean ) => window.alert( `The button is now ${prev ? 'on' : 'off'}! (the animation may be skipped by this alert)` );

const SwitchExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="headline">Switch component</Text>
		<Text variant={'h2'}>Switch on/off</Text>
		<HStack space={'1'} >
			<Switch />
			<Switch initialValue />
		</HStack>
		<Text variant={'h2'}>onChange</Text>
		<HStack>
			<Switch onChange={onChange} />
		</HStack>
		<Text variant={'h2'}>Disabled</Text>
		<HStack space={1}>
			<Switch disabled />
			<Switch initialValue disabled />
		</HStack>
	</VStack>
);

export default SwitchExamples;
