import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
	Icon, HStack, Text, VStack
} from '@amalgama/react-native-ui-kit';

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

const IconExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="h1" bgColor="primary.200">Icon Component</Text>
		<View style={styles.vspace} />
		<Text variant="sh1" color="primary.800">Icon sets</Text>
		<View style={styles.separator} />
		<Text variant="sh2" color="primary.800">AntDesign</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={AntDesign} />
			<Icon name="check" size="md" as={AntDesign} />
			<Icon name="close" size="md" as={AntDesign} />
			<Icon name="plus" size="md" as={AntDesign} />
			<Icon name="minus" size="md" as={AntDesign} />
			<Icon name="calendar" size="md" as={AntDesign} />
			<Icon name="wechat" size="md" as={AntDesign} />
		</HStack>
		<Text variant="sh2" color="primary.800">Entypo</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={Entypo} />
			<Icon name="check" size="md" as={Entypo} />
			<Icon name="cross" size="md" as={Entypo} />
			<Icon name="plus" size="md" as={Entypo} />
			<Icon name="minus" size="md" as={Entypo} />
			<Icon name="calendar" size="md" as={Entypo} />
			<Icon name="chat" size="md" as={Entypo} />
		</HStack>
		<Text variant="sh2" color="primary.800">EvilIcons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={EvilIcons} />
			<Icon name="check" size="md" as={EvilIcons} />
			<Icon name="close" size="md" as={EvilIcons} />
			<Icon name="plus" size="md" as={EvilIcons} />
			<Icon name="minus" size="md" as={EvilIcons} />
			<Icon name="calendar" size="md" as={EvilIcons} />
			<Icon name="comment" size="md" as={EvilIcons} />
		</HStack>
		<Text variant="sh2" color="primary.800">Feather</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={Feather} />
			<Icon name="check" size="md" as={Feather} />
			<Icon name="x" size="md" as={Feather} />
			<Icon name="plus" size="md" as={Feather} />
			<Icon name="minus" size="md" as={Feather} />
			<Icon name="calendar" size="md" as={Feather} />
			<Icon name="message-circle" size="md" as={Feather} />
		</HStack>
		<Text variant="sh2" color="primary.800">Fontawesome</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={FontAwesome} />
			<Icon name="check" size="md" as={FontAwesome} />
			<Icon name="close" size="md" as={FontAwesome} />
			<Icon name="plus" size="md" as={FontAwesome} />
			<Icon name="minus" size="md" as={FontAwesome} />
			<Icon name="calendar" size="md" as={FontAwesome} />
			<Icon name="comment" size="md" as={FontAwesome} />
		</HStack>
		<Text variant="sh2" color="primary.800">Fontisto</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={Fontisto} />
			<Icon name="check" size="md" as={Fontisto} />
			<Icon name="close-a" size="md" as={Fontisto} />
			<Icon name="plus-a" size="md" as={Fontisto} />
			<Icon name="minus-a" size="md" as={Fontisto} />
			<Icon name="calendar" size="md" as={Fontisto} />
			<Icon name="comment" size="md" as={Fontisto} />
		</HStack>
		<Text variant="sh2" color="primary.800">Foundation</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={Foundation} />
			<Icon name="check" size="md" as={Foundation} />
			<Icon name="x" size="md" as={Foundation} />
			<Icon name="plus" size="md" as={Foundation} />
			<Icon name="minus" size="md" as={Foundation} />
			<Icon name="calendar" size="md" as={Foundation} />
			<Icon name="comment" size="md" as={Foundation} />
		</HStack>
		<Text variant="sh2" color="primary.800">Ionicons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={Ionicons} />
			<Icon name="checkmark" size="md" as={Ionicons} />
			<Icon name="close" size="md" as={Ionicons} />
			<Icon name="md-add" size="md" as={Ionicons} />
			<Icon name="md-remove" size="md" as={Ionicons} />
			<Icon name="calendar" size="md" as={Ionicons} />
			<Icon name="chatbubble-outline" size="md" as={Ionicons} />
		</HStack>
		<Text variant="sh2" color="primary.800">MaterialCommunityIcons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={MaterialCommunityIcons} />
			<Icon name="check" size="md" as={MaterialCommunityIcons} />
			<Icon name="close" size="md" as={MaterialCommunityIcons} />
			<Icon name="plus" size="md" as={MaterialCommunityIcons} />
			<Icon name="minus" size="md" as={MaterialCommunityIcons} />
			<Icon name="calendar" size="md" as={MaterialCommunityIcons} />
			<Icon name="comment" size="md" as={MaterialCommunityIcons} />
		</HStack>
		<Text variant="sh2" color="primary.800">Octicons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={Octicons} />
			<Icon name="check" size="md" as={Octicons} />
			<Icon name="x" size="md" as={Octicons} />
			<Icon name="plus" size="md" as={Octicons} />
			<Icon name="dash" size="md" as={Octicons} />
			<Icon name="calendar" size="md" as={Octicons} />
			<Icon name="comment" size="md" as={Octicons} />
		</HStack>
		<Text variant="sh2" color="primary.800">SimpleLineIcons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" size="md" as={SimpleLineIcons} />
			<Icon name="check" size="md" as={SimpleLineIcons} />
			<Icon name="close" size="md" as={SimpleLineIcons} />
			<Icon name="plus" size="md" as={SimpleLineIcons} />
			<Icon name="minus" size="md" as={SimpleLineIcons} />
			<Icon name="calendar" size="md" as={SimpleLineIcons} />
			<Icon name="bubble" size="md" as={SimpleLineIcons} />
		</HStack>
		<Text variant="sh2" color="primary.800">Zocial</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="amazon" size="md" as={Zocial} />
			<Icon name="android" size="md" as={Zocial} />
			<Icon name="appstore" size="md" as={Zocial} />
			<Icon name="stackoverflow" size="md" as={Zocial} />
			<Icon name="reddit" size="md" as={Zocial} />
			<Icon name="wikipedia" size="md" as={Zocial} />
			<Icon name="github" size="md" as={Zocial} />
		</HStack>
		<Text variant="sh1" color="primary.800">Sizes</Text>
		<View style={styles.separator} />
		<HStack space={2}>
			<Icon name="heart" color="information.100" size="xs" as={FontAwesome} />
			<Icon name="heart" color="success.200" size="sm" as={FontAwesome} />
			<Icon name="heart" color="success.300" size="md" as={FontAwesome} />
			<Icon name="heart" color="accent.400" size="lg" as={FontAwesome} />
			<Icon name="heart" color="error.500" size="xl" as={FontAwesome} />
			<Icon name="heart" color="success.600" size="2xl" as={FontAwesome} />
			<Icon name="heart" color="error.700" size="3xl" as={FontAwesome} />
		</HStack>
	</VStack>
);

export default IconExamples;
