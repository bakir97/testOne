import React from 'react';
import {View, Animated} from 'react-native';
import {useImageResize} from '../../hooks/useImageResize';
import {composeImageStyles, styles} from './styles';

const AnimatedImage = ({uri, handleImageChange}) => {
  const handleRestImage = () => {
    handleImageChange(null);
  };

  const {opacity} = useImageResize(uri, handleRestImage);

  if (!uri) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Animated.Image source={{uri}} style={composeImageStyles(opacity)} />
    </View>
  );
};

export default AnimatedImage;
