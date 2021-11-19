import React from 'react';
import {View, Text} from 'react-native';

const GistItem = ({owner, files}) => {
  const fileName = Object.keys(files)[0];

  return (
    <View>
      <Text>{fileName}</Text>
    </View>
  );
};

export default GistItem;
