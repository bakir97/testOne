import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const GistItem = ({owner, files}) => {
  const fileName = Object.keys(files)[0];

  return (
    <View style={styles.container}>
      <Image source={{uri: owner.avatar_url}} style={styles.image} />
      <Text style={styles.fileName} numberOfLines={1}>
        {fileName}
      </Text>
    </View>
  );
};

export default GistItem;
