import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const ErrorItem = ({message}) => {
  if (!message) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

export default ErrorItem;
