import * as React from 'react';

import { StyleSheet } from 'react-native';
import {
	Text,
	VStack
} from '@amalgama/embassy-ui';
import FirstDialogExample from './Dialog/FirstDialogExample';
import SecondDialogExample from './Dialog/SecondDialogExample';
import ThirdDialogExample from './Dialog/ThirdDialogExample';

const styles = StyleSheet.create( {
	container: {
		marginBottom: 20
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	}
} );

const DialogExamples = () => ( <VStack style={styles.container} space="2">

	<Text variant="headline" marginBottom={5}>Dialog Component</Text>

	<FirstDialogExample />
	<SecondDialogExample />
	<ThirdDialogExample />

</VStack> );

export default DialogExamples;
