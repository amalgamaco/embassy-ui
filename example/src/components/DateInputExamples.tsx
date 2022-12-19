import * as React from 'react';
import {
	Text, DateInput, VStack
} from '@amalgama/embassy-ui';
import { View } from 'react-native';

const styles = {
	DateInput: {
		marginBottom: 20,
		width: 200
	},
	vspace: {
		height: 10,
		minWidth: '100%'
	},
	separator: {
		height: 1,
		minWidth: '100%',
		marginTop: 2,
		marginBottom: 6,
		backgroundColor: 'black'
	}
};

const DateInputExamples = () => {
	const [ value, setValue ] = React.useState( '' );

	return (
		<VStack>
			<Text variant="headline">DateInput Component</Text>
			<View style={styles.vspace} />
			<Text variant="subtitle">Enabled</Text>
			<View style={styles.separator} />
			<View style={styles.vspace} />
			<DateInput value={value} onChange={setValue} />

			<View style={styles.vspace} />

			<Text variant="subtitle">Disabled</Text>
			<View style={styles.separator} />
			<View style={styles.vspace} />
			<DateInput disabled value={value} onChange={setValue} />

			<View style={styles.vspace} />

			<Text variant="subtitle">Error</Text>
			<View style={styles.separator} />
			<View style={styles.vspace} />
			<View>
				<DateInput error value={value} onChange={setValue} />
			</View>
			<View style={styles.vspace} />
		</VStack>
	);
};

export default DateInputExamples;
