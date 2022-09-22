import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

const style = {
	borderBottomWidth: 1, borderBottomColor: '#AAA'
};

const TextInput = ( props: TextInputProps ) => (
	<RNTextInput style={style} placeholderTextColor="#777" {...props} />
);

export default TextInput;
