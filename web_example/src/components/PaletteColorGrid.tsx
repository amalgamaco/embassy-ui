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
		</VStack>
	);
};

export default PaletteColorGrid;
