import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
	Button, HStack, Icon, Text, VStack
} from '@amalgamaco/embassy-ui';

const styles = StyleSheet.create( {
	container: {
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

const onButtonPressed = () => window.alert( 'Pressed!' );

const ButtonExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="headline">Button Component</Text>
		<View style={styles.vspace} />
		<Text variant="subtitle">Variants</Text>
		<View style={styles.separator} />
		<Button variant="primary" onPress={onButtonPressed}>Primary</Button>
		<Button variant="secondary" onPress={onButtonPressed}>Secondary</Button>
		<Button variant="priority" onPress={onButtonPressed}>Priority</Button>
		<Button variant="custom" onPress={onButtonPressed}>Custom</Button>
		<Text variant="subtitle">Icons</Text>
		<View style={styles.separator} />
		<Button
			variant="primary"
			leftIcon={<Icon name="plus" />}
			onPress={onButtonPressed}
		>
			Primary
		</Button>
		<Button
			variant="secondary"
			rightIcon={<Icon name="gitlab" />}
			onPress={onButtonPressed}
		>
			Secondary
		</Button>
		<Button
			variant="priority"
			leftIcon={<Icon name="close" />}
			onPress={onButtonPressed}
		>
			Priority
		</Button>
		<Button
			variant="success"
			leftIcon={<Icon name="check" />}
			onPress={onButtonPressed}
		>
			Success
		</Button>
		<Button
			variant="custom"
			__leftIcon={{ color: 'success.800' }}
			__rightIcon={{ color: 'error.700' }}
			leftIcon={<Icon name="bus-outline" />}
			rightIcon={<Icon name="flask" />}
			onPress={onButtonPressed}
		>
			Custom
		</Button>
		<Text variant="subtitle">Disabled</Text>
		<View style={styles.separator} />
		<Button variant="primary" disabled onPress={onButtonPressed}>Primary Disabled</Button>
		<Button variant="secondary" disabled onPress={onButtonPressed}>Secondary Disabled</Button>
		<Button variant="priority" disabled onPress={onButtonPressed}>Priority Disabled</Button>
		<Button variant="success" disabled onPress={onButtonPressed}>Success Disabled</Button>
		<Button
			variant="primary"
			__disabled={{ bg: 'error.100', borderColor: 'error.100' }}
			disabled
			onPress={onButtonPressed}
		>
			Primary with custom disabled bg
		</Button>
		<Text variant="subtitle">Horizontal group</Text>
		<View style={styles.separator} />
		<HStack space="3">
			<Button flex={1} variant="secondary" onPress={onButtonPressed}>Cancel</Button>
			<Button flex={1} variant="priority" onPress={onButtonPressed}>Delete</Button>
		</HStack>
	</VStack>
);

export default ButtonExamples;
