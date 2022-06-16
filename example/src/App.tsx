import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ThemeProvider, VStack } from '@amalgama/react-native-ui-kit';

import TextExamples from './components/TextExamples';
import BoxExamples from './components/BoxExamples';
import ButtonExamples from './components/ButtonExamples';

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
					<VStack>
						<TextExamples />
						<BoxExamples />
						<ButtonExamples />
					</VStack>
				</ScrollView>
			</SafeAreaView>
		</ThemeProvider>
	);
}
