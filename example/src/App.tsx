import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ThemeProvider } from '@amalgama/react-native-ui-kit';

import TextExamples from './components/TextExamples';
import BoxExamples from './components/BoxExamples';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginHorizontal: 16
	},
	scroll: {
		flexGrow: 1,
		width: '100%'
	}
} );

export default function App() {
	return (
		<ThemeProvider>
			<SafeAreaView style={styles.container}>
				<ScrollView contentContainerStyle={styles.scroll}>
					<TextExamples />
					<BoxExamples />
				</ScrollView>
			</SafeAreaView>
		</ThemeProvider>
	);
}
