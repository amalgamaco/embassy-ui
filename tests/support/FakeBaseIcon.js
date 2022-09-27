import React from 'react';
import { Text } from 'react-native';

const FakeBaseIcon = ( { name, testID, ...props } ) => (
	<Text testID={testID} {...props}>{name}</Text>
);

export default FakeBaseIcon;
