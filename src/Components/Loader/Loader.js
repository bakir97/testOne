import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Loader = ({small}) => {
  return (
    <View style={!small && styles.fullContainer}>
      <Text>Loading</Text>
    </View>
  );
};

export default Loader;
