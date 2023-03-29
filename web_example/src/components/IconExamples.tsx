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

const IconExamples = () => (
	<VStack style={styles.container} space="2">
		<Text variant="headline">Icon Component</Text>
		<View style={styles.vspace} />
		<Text variant="subtitle">Icon sets</Text>
		<View style={styles.separator} />
		<Text variant="sh2" color="primary.800">AntDesign</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={AntDesign} />
			<Icon name="check" as={AntDesign} />
			<Icon name="close" as={AntDesign} />
			<Icon name="plus" as={AntDesign} />
			<Icon name="minus" as={AntDesign} />
			<Icon name="calendar" as={AntDesign} />
			<Icon name="wechat" as={AntDesign} />
		</HStack>
		<Text variant="sh2" color="primary.800">Entypo</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={Entypo} />
			<Icon name="check" as={Entypo} />
			<Icon name="cross" as={Entypo} />
			<Icon name="plus" as={Entypo} />
			<Icon name="minus" as={Entypo} />
			<Icon name="calendar" as={Entypo} />
			<Icon name="chat" as={Entypo} />
		</HStack>
		<Text variant="sh2" color="primary.800">EvilIcons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={EvilIcons} />
			<Icon name="check" as={EvilIcons} />
			<Icon name="close" as={EvilIcons} />
			<Icon name="plus" as={EvilIcons} />
			<Icon name="minus" as={EvilIcons} />
			<Icon name="calendar" as={EvilIcons} />
			<Icon name="comment" as={EvilIcons} />
		</HStack>
		<Text variant="sh2" color="primary.800">Feather</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={Feather} />
			<Icon name="check" as={Feather} />
			<Icon name="x" as={Feather} />
			<Icon name="plus" as={Feather} />
			<Icon name="minus" as={Feather} />
			<Icon name="calendar" as={Feather} />
			<Icon name="message-circle" as={Feather} />
		</HStack>
		<Text variant="sh2" color="primary.800">Fontawesome</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={FontAwesome} />
			<Icon name="check" as={FontAwesome} />
			<Icon name="close" as={FontAwesome} />
			<Icon name="plus" as={FontAwesome} />
			<Icon name="minus" as={FontAwesome} />
			<Icon name="calendar" as={FontAwesome} />
			<Icon name="comment" as={FontAwesome} />
		</HStack>
		<Text variant="sh2" color="primary.800">Fontisto</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={Fontisto} />
			<Icon name="check" as={Fontisto} />
			<Icon name="close-a" as={Fontisto} />
			<Icon name="plus-a" as={Fontisto} />
			<Icon name="minus-a" as={Fontisto} />
			<Icon name="calendar" as={Fontisto} />
			<Icon name="comment" as={Fontisto} />
		</HStack>
		<Text variant="sh2" color="primary.800">Foundation</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={Foundation} />
			<Icon name="check" as={Foundation} />
			<Icon name="x" as={Foundation} />
			<Icon name="plus" as={Foundation} />
			<Icon name="minus" as={Foundation} />
			<Icon name="calendar" as={Foundation} />
			<Icon name="comment" as={Foundation} />
		</HStack>
		<Text variant="sh2" color="primary.800">Ionicons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={Ionicons} />
			<Icon name="checkmark" as={Ionicons} />
			<Icon name="close" as={Ionicons} />
			<Icon name="md-add" as={Ionicons} />
			<Icon name="md-remove" as={Ionicons} />
			<Icon name="calendar" as={Ionicons} />
			<Icon name="chatbubble-outline" as={Ionicons} />
		</HStack>
		<Text variant="sh2" color="primary.800">MaterialCommunityIcons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={MaterialCommunityIcons} />
			<Icon name="check" as={MaterialCommunityIcons} />
			<Icon name="close" as={MaterialCommunityIcons} />
			<Icon name="plus" as={MaterialCommunityIcons} />
			<Icon name="minus" as={MaterialCommunityIcons} />
			<Icon name="calendar" as={MaterialCommunityIcons} />
			<Icon name="comment" as={MaterialCommunityIcons} />
		</HStack>
		<Text variant="sh2" color="primary.800">Octicons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={Octicons} />
			<Icon name="check" as={Octicons} />
			<Icon name="x" as={Octicons} />
			<Icon name="plus" as={Octicons} />
			<Icon name="dash" as={Octicons} />
			<Icon name="calendar" as={Octicons} />
			<Icon name="comment" as={Octicons} />
		</HStack>
		<Text variant="sh2" color="primary.800">SimpleLineIcons</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="heart" as={SimpleLineIcons} />
			<Icon name="check" as={SimpleLineIcons} />
			<Icon name="close" as={SimpleLineIcons} />
			<Icon name="plus" as={SimpleLineIcons} />
			<Icon name="minus" as={SimpleLineIcons} />
			<Icon name="calendar" as={SimpleLineIcons} />
			<Icon name="bubble" as={SimpleLineIcons} />
		</HStack>
		<Text variant="sh2" color="primary.800">Zocial</Text>
		<HStack mb={5} justifyContent="space-between">
			<Icon name="amazon" as={Zocial} />
			<Icon name="android" as={Zocial} />
			<Icon name="appstore" as={Zocial} />
			<Icon name="stackoverflow" as={Zocial} />
			<Icon name="reddit" as={Zocial} />
			<Icon name="wikipedia" as={Zocial} />
			<Icon name="github" as={Zocial} />
		</HStack>
		<Text variant="subtitle">Sizes</Text>
		<View style={styles.separator} />
		<HStack space={2} justifyContent="space-between">
			<Icon name="heart" color="error.700" size="2xs" />
			<Icon name="heart" color="information.100" size="xs" />
			<Icon name="heart" color="success.200" size="sm" />
			<Icon name="heart" color="success.300" />
			<Icon name="heart" color="accent.400" size="lg" />
			<Icon name="heart" color="error.500" size="xl" />
			<Icon name="heart" color="success.600" size="2xl" />
		</HStack>
	</VStack>
);

export default IconExamples;
