import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const GistItem = ({owner, files, onPress}) => {
  const fileName = Object.keys(files)[0];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(owner.avatar_url)}>
      <Image source={{uri: owner.avatar_url}} style={styles.image} />
      <Text style={styles.fileName} numberOfLines={1}>
        {fileName}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(GistItem);
