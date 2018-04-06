import React from 'react';
import { View, Text, TextInput } from 'react-native';

const TextFieldInput = ({
  label, value, onChangeText, placeholder, secureTextEntry,
}) => (
  <View>
    <Text>{label}</Text>
    <TextInput
      autoCorrect={false}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      underlineColorAndroid="transparent"
    />
  </View>
);

export default TextFieldInput;
