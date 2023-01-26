import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
	Box, Text, VStack, HStack
} from '@amalgama/embassy-ui';

const styles = StyleSheet.create( {
	container: {
		width: '100%',
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

const PaletteColorGrid = () => {
	const colors = [
		'primary', 'secondary', 'neutral', 'error', 'warning',
		'success', 'information', 'accent'
	];
	const range = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ];

	const textStyles = [
		{ color: 'text-primary', label: 'Primary' },
		{ color: 'text-secondary', label: 'Secondary' },
		{ color: 'text-disabled', label: 'Disabled' },
		{ color: 'text-link', label: 'Link' },
		{ color: 'text-success', label: 'Success' },
		{ color: 'text-warning', label: 'Warning' },
		{ color: 'text-error', label: 'Error' }
	];

	const backgroundPrimaryStyles = [
		{ color: 'bg-primary-enabled', label: 'Primary Enabled' },
		{ color: 'bg-primary-disabled', label: 'Primary Disabled' },
		{ color: 'bg-primary-hover', label: 'Primary Hover' },
		{ color: 'bg-primary-focus', label: 'Primary Focus' },
		{ color: 'bg-primary-pressed', label: 'Primary Pressed' }
	];

	const backgroundSecondaryStyles = [
		{ color: 'bg-secondary-enabled', label: 'Secondary Enabled' },
		{ color: 'bg-secondary-enabled-light', label: 'Secondary Enabled Light' },
		{ color: 'bg-secondary-disabled', label: 'Secondary Disabled' },
		{ color: 'bg-secondary-hover', label: 'Secondary Hover' },
		{ color: 'bg-secondary-hover-light', label: 'Secondary Hover Light' },
		{ color: 'bg-secondary-focus', label: 'Secondary Focus' },
		{ color: 'bg-secondary-focus-light', label: 'Secondary Focus Light' },
		{ color: 'bg-secondary-pressed', label: 'Secondary Pressed' },
		{ color: 'bg-secondary-pressed-light', label: 'Secondary Pressed Light' }
	];

	const borderStyles = [
		{ color: 'border-primary', label: 'Primary' },
		{ color: 'border-secondary', label: 'Secondary' }
	];

	return (
		<VStack style={styles.container}>
			<Text variant="headline">Palette</Text>
			<View style={styles.vspace} />
			<VStack>
				{colors.map( ( color => (
					<VStack key={color}>
						<Text variant="sh" bgColor="secondary.200">{color}</Text>
						<HStack>
							{range.map( tone => (
								<Box
									key={`${color}.${tone}`}
									bg={`${color}.${tone}`}
									height={50}
									width="10%"
									justifyContent="center"
								>
									<Text
										color={tone > 400 ? 'white' : 'black'}
										fontSize="xs"
										textAlign='center'
									>
										{tone}
									</Text>
								</Box>
							) )}
						</HStack>
					</VStack>
				) ) )}
			</VStack>
			<View style={styles.vspace} />
			<Text variant="headline">Styles</Text>

			<View style={styles.vspace} />
			<Text variant="subtitle">Text Styles</Text>
			<View style={styles.separator} />
			<View style={styles.vspace} />
			<VStack>
				{textStyles.map( ( { color, label } ) => (
					<Text key={color} variant="body-special" color={color}>{label}</Text>
				) )}
			</VStack>

			<View style={styles.vspace} />
			<Text variant="subtitle">Background Primary State Styles</Text>
			<View style={styles.separator} />
			<View style={styles.vspace} />
			<HStack flexWrap='wrap'>
				{backgroundPrimaryStyles.map( ( { color, label } ) => (
					<Box key={color} bg={color} height="100px" width="100px" marginRight="2" marginBottom="2">
						<Text variant="body" textAlign='center' color="white">{label}</Text>
					</Box>
				) )}
			</HStack>

			<View style={styles.vspace} />
			<Text variant="subtitle">Background Secondary State Styles</Text>
			<View style={styles.separator} />
			<View style={styles.vspace} />
			<HStack flexWrap='wrap'>
				{backgroundSecondaryStyles.map( ( { color, label } ) => (
					<Box key={color} bg={color} height="100px" width="100px" marginRight="2" marginBottom="2">
						<Text variant="body" textAlign='center' color="text-primary">{label}</Text>
					</Box>
				) )}
			</HStack>

			<View style={styles.vspace} />
			<Text variant="subtitle">Border Styles</Text>
			<View style={styles.separator} />
			<View style={styles.vspace} />
			<HStack flexWrap='wrap'>
				{borderStyles.map( ( { color, label } ) => (
					<Box key={color} borderColor={color} borderWidth="sm" height="100px" width="100px" marginRight="2" marginBottom="2">
						<Text variant="body" textAlign='center' color="text-primary">{label}</Text>
					</Box>
				) )}
			</HStack>
		</VStack>
	);
};

export default PaletteColorGrid;
