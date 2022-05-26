import * as React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from '@amalgama/react-native-ui-kit';

import TextExamples from './components/TextExamples';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginHorizontal: 16
	}
} );

export default function App() {
	return (
		<ThemeProvider>
			<SafeAreaView style={styles.container}>
				<TextExamples />
			</SafeAreaView>
		</ThemeProvider>
	);
}
